import { Component, computed, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { IndicadorComponent } from "@components/indicador/indicador.component";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { catchError, combineLatestWith, EMPTY, finalize, Observable, startWith, Subject, switchMap } from "rxjs";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { IndicadorViewModelHttp } from "@api-vision360/models/indicador-view-model-http";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { SkeletonModule } from "primeng/skeleton";
import { getProfileNameByEnum } from "@app/utils/profile.utils";
import { PageService } from "@services/page.service";
import { IndicadoresComponent } from "@components/indicadores/indicadores.component";

@Component({
  selector: 'app-gestao-resumo',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, IndicadorComponent, SecondsToTimePipe, SkeletonModule, RouterLink, IndicadoresComponent],
  templateUrl: './gestao-resumo.component.html',
  styleUrls: ['./gestao-resumo.component.scss']
})
export class GestaoResumoComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);
  private readonly loggedUserService = inject(LoggedUserService);

  info$ = this.pageService.getRouteInfo(this.route);
  info = toSignal(this.info$);

  currentUser = toSignal(this.loggedUserService.user$);

  loading = false;
  hasError = false;
  tryAgain = new Subject<void>();

  chamada$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    combineLatestWith(
      this.tryAgain.pipe(startWith(undefined))
    ),
    switchMap(([routeInfo]) => {
      const profile = ProfileEnum[routeInfo.perfil];
      const service = this.pageService.getServiceByProfile(routeInfo.perfil) as any;
      const method = `api${profile}IdChamadasPost$Json`;
      const request = service?.[method]?.({
        id: routeInfo.matricula,
        body: routeInfo.filter,
      }) as Observable<IndicadorViewModelHttp>;

      this.loading = true;
      this.hasError = false;
      return request.pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading = false),
        catchError(() => {
          this.hasError = true;
          return EMPTY;
        })
      );
    })
  );
  chamada = toSignal(this.chamada$);

  visaoGeralRouterLink = computed(() => {
    const profile = this.info()?.perfil;
    if ( profile == null ) {
      return ['.'];
    }
    const profileName = getProfileNameByEnum(profile);
    const routerLink = `/${this.currentUser()?.admin ? 'admin' : 'main'}/chamadas/${profileName}/${this.info()?.matricula}`;
    return [routerLink];
  });

  ngOnDestroy() {
    this.tryAgain.complete();
  }
}
