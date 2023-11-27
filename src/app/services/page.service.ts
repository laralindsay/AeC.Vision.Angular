import { inject, Injectable } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { ActivatedRoute } from "@angular/router";
import { debounceTime, first, Observable, startWith, switchMap } from "rxjs";
import { map } from "rxjs/operators";
import { HttpDiretorService } from "@api-vision360/services/http-diretor.service";
import { HttpGerenteExecutivoService } from "@api-vision360/services/http-gerente-executivo.service";
import { HttpGerenteService } from "@api-vision360/services/http-gerente.service";
import { HttpCoordenadorService } from "@api-vision360/services/http-coordenador.service";
import { HttpSupervisorService } from "@api-vision360/services/http-supervisor.service";
import { HttpOperadorService } from "@api-vision360/services/http-operador.service";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private readonly formBuilder = inject(FormBuilder);
  private readonly loggedUserService = inject(LoggedUserService);

  private readonly httpDiretorService = inject(HttpDiretorService);
  private readonly httpGerenteExecutivoService = inject(HttpGerenteExecutivoService);
  private readonly httpGerenteService = inject(HttpGerenteService);
  private readonly httpCoordenadorService = inject(HttpCoordenadorService);
  private readonly httpSupervisorService = inject(HttpSupervisorService);
  private readonly httpOperadorService = inject(HttpOperadorService);

  filterForm = this.formBuilder.group({
    data: this.formBuilder.control<string | null>(null),
    dataFim: this.formBuilder.control<string | null>(null),
    matricula: this.formBuilder.control<number | null>(null),
    operacaoId: this.formBuilder.control<number | null>(null),
    segmentoId: this.formBuilder.control<number | null>(null),
  });

  getServiceByProfile(profile: ProfileEnum) {
    switch (profile) {
      case ProfileEnum.Diretor: return this.httpDiretorService;
      case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService;
      case ProfileEnum.Gerente: return this.httpGerenteService;
      case ProfileEnum.Coordenador: return this.httpCoordenadorService;
      case ProfileEnum.Supervisor: return this.httpSupervisorService;
      case ProfileEnum.Operador: return this.httpOperadorService;
      default: return null;
    }
  }

  getRouteInfoWithoutFilter(activatedRoute: ActivatedRoute): Observable<PageRouteInfo> {
    return activatedRoute.data.pipe(
      switchMap(routeData => {
        const pageProfile = routeData['idPerfil'];

        if (pageProfile == null) {
          return this.loggedUserService.user$.pipe(
            first(),
            map(x => ({
              perfil: x?.idPerfil,
              matricula: x?.matricula?.length ? Number(x.matricula) : 'null' as unknown as number,
            } as PageRouteInfo)),
          );
        }

        return activatedRoute.paramMap.pipe(
          map(params => params.get('matricula')),
          map(matricula => ({
            perfil: pageProfile,
            matricula: matricula && matricula?.length ? Number(matricula) : 'null' as unknown as number,
          } as PageRouteInfo))
        );
      }),
      switchMap(pageRouteInfo => activatedRoute.queryParamMap.pipe(
        map(queryParamMap => ({
          ...pageRouteInfo,
          queryParams: {
            diretorId: Number(queryParamMap.get('diretor')),
            gerenteExecutivoId: Number(queryParamMap.get('gerente-executivo')),
            gerenteId: Number(queryParamMap.get('gerente')),
            coordenadorId: Number(queryParamMap.get('coordenador')),
            supervisorId: Number(queryParamMap.get('supervisor')),
          }
        }))
      ))
    );
  }

  getRouteInfo(activatedRoute: ActivatedRoute): Observable<PageRouteInfo> {
    return this.getRouteInfoWithoutFilter(activatedRoute).pipe(
      switchMap(pageInfo => {
        return this.filterForm.valueChanges.pipe(
          debounceTime(800),
          startWith(this.filterForm.value),
          map(formValue => ({
            ...pageInfo,
            filter: {
              data: formValue.data,
              dataFim: formValue.dataFim,
              matricula: formValue.matricula,
              operacao: formValue.operacaoId,
              segmento: formValue.segmentoId,
            }
          } as PageRouteInfo))
        )
      })
    );
  }
}

export interface PageRouteInfo {
  perfil: ProfileEnum;
  matricula: number;
  filter?: PageRouteFilters;
  queryParams?: {
    diretorId?: number;
    gerenteExecutivoId?: number,
    gerenteId?: number,
    coordenadorId?: number,
    supervisorId?: number,
  }
}

export interface PageRouteFilters {
  matricula?: number | null;
  operacao?: number | null;
  segmento?: number | null;
  data?: string | null;
}
