import { Component, computed, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { getProfileNameByEnum } from "@app/utils/profile.utils";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { PageService } from "@services/page.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, switchMap } from "rxjs";
import { HttpOperadorService } from "@api-vision360/services/http-operador.service";
import { SkeletonModule } from "primeng/skeleton";
import { IndicadoresComponent } from "@components/indicadores/indicadores.component";
import { LoggedUserService } from "@services/logged-user.service";

@Component({
  selector: 'app-gestao-resumo-operador',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, RouterLink, SkeletonModule, IndicadoresComponent],
  templateUrl: './gestao-resumo-operador.component.html',
  styleUrls: ['./gestao-resumo-operador.component.scss']
})
export class GestaoResumoOperadorComponent {

  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);
  private readonly httpOperadorService = inject(HttpOperadorService);
  private readonly loggedUserService = inject(LoggedUserService);

  info$ = this.pageService.getRouteInfo(this.route);
  info = toSignal(this.info$);

  currentUser = toSignal(this.loggedUserService.user$);

  loading = {
    status: false,
    chamadas: false,
  };
  hasError = {
    status: false,
    chamadas: false,
  };
  tryAgain = {
    status: new BehaviorSubject<void>(undefined),
    chamadas: new BehaviorSubject<void>(undefined),
  };

  visaoGeralRouterLink = computed(() => {
    const profile = this.info()?.perfil;
    if ( profile == null ) {
      return ['.'];
    }
    const profileName = getProfileNameByEnum(profile);
    const routerLink = `/${this.currentUser()?.admin ? 'admin' : 'main'}/chamadas/${profileName}/${this.info()?.matricula}`;
    return [routerLink];
  });

  status$ = this.info$.pipe(
    combineLatestWith(
      this.tryAgain.status,
    ),
    switchMap(([routeInfo]) => {
      this.loading.status = true;
      this.hasError.status = false;
      return this.httpOperadorService.apiOperadorIdGet$Json({
        id: routeInfo.matricula
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.status = false),
        catchError(() => {
          this.hasError.status = true;
          return EMPTY;
        })
      );
    })
  );
  status = toSignal(this.status$);
  conectadoClass = computed(() => {
    if ( this.status()?.conectado ) {
      return 'bg-success bg-opacity-25 text-success'
    }
    return 'bg-dark bg-opacity-25';
  });


  chamadas$ = this.info$.pipe(
    combineLatestWith(
      this.tryAgain.chamadas,
    ),
    switchMap(([routeInfo]) => {
      this.loading.chamadas = true;
      this.hasError.chamadas = false;
      return this.httpOperadorService.apiOperadorIdChamadasPost$Json({
        id: routeInfo.matricula,
        body: routeInfo.filter,
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.chamadas = false),
        catchError(() => {
          this.hasError.chamadas = true;
          return EMPTY;
        })
      );
    })
  );
  chamadas = toSignal(this.chamadas$);
}
