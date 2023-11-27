import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLazyLoadEvent, TableModule } from "primeng/table";
import { LoadingComponent } from "@components/loading/loading.component";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { PageService } from "@services/page.service";
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  EMPTY,
  finalize,
  Observable,
  switchMap,
  throwError
} from "rxjs";
import { ProfileEnum } from "@services/logged-user.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { LigacaoModelHttp } from "@api-vision360/models/ligacao-model-http";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { ChamadaRequestViewModelHttp } from "@api-vision360/models/chamada-request-view-model-http";
import { PacoteLigacaoModelHttp } from "@api-vision360/models/pacote-ligacao-model-http";

@Component({
  selector: 'app-chamadas-table',
  standalone: true,
  imports: [CommonModule, TableModule, LoadingComponent, SecondsToTimePipe, RouterLink],
  templateUrl: './chamadas-table.component.html',
  styleUrls: ['./chamadas-table.component.scss']
})
export class ChamadasTableComponent implements OnDestroy {

  private readonly destroyRef = inject(DestroyRef);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);

  routeInfo$ = this.pageService.getRouteInfo(this.activatedRoute);

  tryAgain$ = new BehaviorSubject(undefined);
  tableLazyLoad$ = new BehaviorSubject<TableLazyLoadEvent | undefined>(undefined);

  loading = signal(false);
  hasError = signal(false);
  chamadas$: Observable<PacoteLigacaoModelHttp> = this.routeInfo$.pipe(
    combineLatestWith(
      this.tableLazyLoad$,
      this.tryAgain$,
    ),
    switchMap(([routeInfo, lazyLoad]) => {
      const profile = ProfileEnum[routeInfo.perfil];
      const service = this.pageService.getServiceByProfile(routeInfo.perfil) as any;
      const method = `api${profile}IdChamadasAnaliticoPost$Json`;
      const request = service?.[method]?.({
        id: routeInfo.matricula,
        body: {
          ...routeInfo.filter,
          skip: lazyLoad?.first ?? 0,
          top: lazyLoad?.rows ?? 10,
        },
      } as ChamadaRequestViewModelHttp) as Observable<PacoteLigacaoModelHttp>;

      if (!request) {
        console.log('[ChamadasTableComponent] request not found', profile, service, method, request);
      }

      this.loading.set(true);
      this.hasError.set(false);
      return (request ?? throwError(() => null)).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
        catchError(() => {
          this.hasError.set(true);
          return EMPTY;
        })
      );
    })
  );
  chamadas = toSignal(this.chamadas$);
  tableData = computed(() => {
    if ( this.loading() || this.hasError() ) {
      return undefined;
    }
    return this.chamadas();
  })

  ngOnDestroy() {
    this.tryAgain$.complete();
    this.tableLazyLoad$.complete();
  }

  getRowData(row: any): LigacaoModelHttp {
    return row;
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    this.tableLazyLoad$.next(event);
  }
}
