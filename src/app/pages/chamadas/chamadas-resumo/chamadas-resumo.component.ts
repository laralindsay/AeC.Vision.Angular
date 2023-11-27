import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from "primeng/skeleton";
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  EMPTY,
  finalize,
  Observable,
  switchMap,
  tap,
  throwError
} from "rxjs";
import { IndicadorViewModelHttp } from "@api-vision360/models/indicador-view-model-http";
import { ProfileEnum } from "@services/logged-user.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";
import { SecondsToTimePipe } from '@app/pipes/seconds-to-time.pipe';

@Component({
  selector: 'app-chamadas-resumo',
  standalone: true,
    imports: [CommonModule, SkeletonModule, SecondsToTimePipe],
  templateUrl: './chamadas-resumo.component.html',
  styleUrls: ['./chamadas-resumo.component.scss']
})
export class ChamadasResumoComponent implements OnDestroy {

  private readonly destroyRef = inject(DestroyRef);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);

  routeInfo$ = this.pageService.getRouteInfo(this.activatedRoute);

  loading = false;
  hasError = false;
  tryAgain = new BehaviorSubject(undefined);

  resumo$: Observable<IndicadorViewModelHttp> = this.routeInfo$.pipe(
    combineLatestWith(
      this.tryAgain,
    ),
    switchMap(([routeInfo]) => {
      const profile = ProfileEnum[routeInfo.perfil];
      const service = this.pageService.getServiceByProfile(routeInfo.perfil) as any;
      const method = `api${profile}IdChamadasPost$Json`;
      const request = service?.[method]?.({
        id: routeInfo.matricula,
        body: routeInfo.filter,
      }) as Observable<IndicadorViewModelHttp>;

      if ( !request ) {
        console.log('[ChamadasResumoComponent] request not found', profile, service, method, request);
      }

      this.loading = true;
      this.hasError = false;
      return (request ?? throwError(() => null)).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading = false),
        catchError(() => {
          this.hasError = true;
          return EMPTY;
        })
      );
    })
  );
  resumo = toSignal(this.resumo$);

  ngOnDestroy() {
    this.tryAgain.complete();
  }
}
