import { Component, computed, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { catchError, combineLatestWith, EMPTY, finalize, Observable, startWith, Subject, switchMap } from "rxjs";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { getProfileEnumById, getProfileNameByEnum } from "@app/utils/profile.utils";
import { HierarquiaViewModelHttp } from "@api-vision360/models/hierarquia-view-model-http";
import { LoadingComponent } from "@components/loading/loading.component";
import { TooltipModule } from "primeng/tooltip";
import { PageService } from "@services/page.service";
import { PacoteHierarquiaViewModelHttp } from "@api-vision360/models/pacote-hierarquia-view-model-http";
import { HttpAdministradorService } from "@api-vision360/services/http-administrador.service";
import { BreadcrumbComponent, BreadcrumbItem } from "@components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-dashboard-hierarquia',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule, TableModule, SecondsToTimePipe, RouterLink, LoadingComponent, TooltipModule, BreadcrumbComponent],
  templateUrl: './dashboard-hierarquia.component.html',
  styleUrls: ['./dashboard-hierarquia.component.scss']
})
export class DashboardHierarquiaComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly pageService = inject(PageService);
  private readonly httpAdministradorService = inject(HttpAdministradorService);

  protected readonly ProfileEnum = ProfileEnum;

  currentUser = toSignal(this.loggedUserService.user$);

  loading = false;
  hasError = false;
  tryAgain$ = new Subject<void>();

  routeInfo$ = this.pageService.getRouteInfo(this.activatedRoute);
  routeInfo = toSignal(this.routeInfo$);

  data$: Observable<PacoteHierarquiaViewModelHttp> = this.routeInfo$.pipe(
    combineLatestWith(
      this.loggedUserService.user$,
      this.tryAgain$.pipe(startWith(undefined))
    ),
    switchMap(([routeInfo, currentUser]) => {
      let profile = ProfileEnum[routeInfo.perfil];
      let service = this.pageService.getServiceByProfile(routeInfo.perfil) as any;
      let method = `api${profile}HierarquiaPost$Json`;

      if ( routeInfo.perfil === ProfileEnum.Administrador ) {
        profile = 'Administrador';
        service = this.httpAdministradorService;
        method = 'apiAdministradorHierarquiaPost$Json';
      }

      const request = service?.[method]?.({
        id: routeInfo.matricula,
        body: {
          ...routeInfo.filter,
          idDiretor: currentUser?.idPerfil === ProfileEnum.Diretor ? Number(currentUser.matricula) : routeInfo.queryParams?.diretorId,
          idGerenteExecutivo: currentUser?.idPerfil === ProfileEnum.GerenteExecutivo ? Number(currentUser.matricula) : routeInfo.queryParams?.gerenteExecutivoId,
          idGerente: currentUser?.idPerfil === ProfileEnum.Gerente ? Number(currentUser.matricula) : routeInfo.queryParams?.gerenteId,
          idCoordenador: currentUser?.idPerfil === ProfileEnum.Coordenador ? Number(currentUser.matricula) : routeInfo.queryParams?.coordenadorId,
          idSupervisor: currentUser?.idPerfil === ProfileEnum.Supervisor ? Number(currentUser.matricula) : routeInfo.queryParams?.supervisorId,
        },
      }) as Observable<PacoteHierarquiaViewModelHttp>;

      if ( !request ) {
        console.log('[DashboardHierarquiaComponent] request not found', profile, service, method, request);
      }

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
  data = toSignal(this.data$, {initialValue: undefined});

  nextRouterLink = computed(() => {
    const currentProfile = getProfileEnumById(this.data()?.idPerfil);
    return getProfileNameByEnum(currentProfile);
  });

  nextQueryParams = computed(() => {
    const profile = this.routeInfo()?.perfil ?? this.currentUser()?.idPerfil;
    const profileName = getProfileNameByEnum(profile as ProfileEnum) as string;
    return {
      [profileName]: this.routeInfo()?.matricula
    };
  });

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const data = this.data();
    const routeInfo = this.routeInfo();
    const currentUser = this.currentUser();

    const route = currentUser?.admin ? '/admin/dashboard' : '/main/dashboard';

    const items: BreadcrumbItem[] = [
      {
        label: 'Diretores',
        routerLink: route,
      },
      {
        label: 'Gerentes Executivos',
        routerLink: `${route}/diretor/${routeInfo?.perfil === ProfileEnum.Diretor ? routeInfo?.matricula : routeInfo?.queryParams?.diretorId}`,
        queryParams: {
          diretor: currentUser?.idPerfil === ProfileEnum.Diretor ? currentUser.matricula : routeInfo?.queryParams?.diretorId,
        }
      },
      {
        label: 'Gerentes',
        routerLink: `${route}/gerente-executivo/${routeInfo?.perfil === ProfileEnum.GerenteExecutivo ? routeInfo?.matricula : routeInfo?.queryParams?.gerenteExecutivoId}`,
        queryParams: {
          diretor: currentUser?.idPerfil === ProfileEnum.Diretor ? currentUser.matricula : routeInfo?.queryParams?.diretorId,
          gerenteExecutivo: currentUser?.idPerfil === ProfileEnum.GerenteExecutivo ? currentUser.matricula : routeInfo?.queryParams?.gerenteExecutivoId,
        }
      },
      {
        label: 'Coordenadores',
        routerLink: `${route}/gerente/${routeInfo?.perfil === ProfileEnum.Gerente ? routeInfo?.matricula : routeInfo?.queryParams?.gerenteId}`,
        queryParams: {
          diretor: currentUser?.idPerfil === ProfileEnum.Diretor ? currentUser.matricula : routeInfo?.queryParams?.diretorId,
          gerenteExecutivo: currentUser?.idPerfil === ProfileEnum.GerenteExecutivo ? currentUser.matricula : routeInfo?.queryParams?.gerenteExecutivoId,
          gerente: currentUser?.idPerfil === ProfileEnum.Gerente ? currentUser.matricula : routeInfo?.queryParams?.gerenteId,
        }
      },
      {
        label: 'Supervisores',
        routerLink: `${route}/coordenador/${routeInfo?.perfil === ProfileEnum.Coordenador ? routeInfo?.matricula : routeInfo?.queryParams?.coordenadorId}`,
        queryParams: {
          diretor: currentUser?.idPerfil === ProfileEnum.Diretor ? currentUser.matricula : routeInfo?.queryParams?.diretorId,
          gerenteExecutivo: currentUser?.idPerfil === ProfileEnum.GerenteExecutivo ? currentUser.matricula : routeInfo?.queryParams?.gerenteExecutivoId,
          gerente: currentUser?.idPerfil === ProfileEnum.Gerente ? currentUser.matricula : routeInfo?.queryParams?.gerenteId,
          coordenador: currentUser?.idPerfil === ProfileEnum.Coordenador ? currentUser.matricula : routeInfo?.queryParams?.coordenadorId,
        }
      },
      {
        label: 'Operadores',
        routerLink: `${route}/supervisor/${routeInfo?.perfil === ProfileEnum.Supervisor ? routeInfo?.matricula : routeInfo?.queryParams?.supervisorId}`,
        queryParams: {
          diretor: currentUser?.idPerfil === ProfileEnum.Diretor ? currentUser.matricula : routeInfo?.queryParams?.diretorId,
          gerenteExecutivo: currentUser?.idPerfil === ProfileEnum.GerenteExecutivo ? currentUser.matricula : routeInfo?.queryParams?.gerenteExecutivoId,
          gerente: currentUser?.idPerfil === ProfileEnum.Gerente ? currentUser.matricula : routeInfo?.queryParams?.gerenteId,
          coordenador: currentUser?.idPerfil === ProfileEnum.Coordenador ? currentUser.matricula : routeInfo?.queryParams?.coordenadorId,
          supervisor: currentUser?.idPerfil === ProfileEnum.Supervisor ? currentUser.matricula : routeInfo?.queryParams?.supervisorId,
        }
      },
    ];

    const itemsFiltered = [
      ...items.filter((x, i) => {
        const itemId = (items.length - 1 - i);
        const byProfile = itemId < (currentUser?.idPerfil ?? 0);
        const byRoute = itemId >= (routeInfo?.perfil ?? 0) - (data ? 0 : 1);
        return byProfile && byRoute;
      })
    ];

    if ( data ) {
      itemsFiltered.push({ label: data.header ?? '' })
    }

    return itemsFiltered;
  });

  ngOnDestroy() {
    this.tryAgain$.complete();
  }

  tryAgain() {
    this.tryAgain$.next();
  }

  getRowData(rowData: any): HierarquiaViewModelHttp {
    return rowData;
  }

  getNextRouterLink(id?: number | null) {
    const nextRouterLink = this.nextRouterLink();
    if (!nextRouterLink) {
      return ['.'];
    }
    const routerLink = `/${this.currentUser()?.admin ? 'admin' : 'main'}/dashboard/${nextRouterLink}`;
    return [routerLink, id];
  }

  getGestaoRouterLink(id?: number | null) {
    if (!id) {
      return ['.'];
    }
    const nextRouterLink = this.nextRouterLink();
    if (!nextRouterLink) {
      return ['.'];
    }
    const routerLink = `/${this.currentUser()?.admin ? 'admin' : 'main'}/gestao/${nextRouterLink}`;
    return [routerLink, id];
  }
}
