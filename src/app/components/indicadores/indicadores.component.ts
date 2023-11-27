import { Component, DestroyRef, inject, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadorComponent } from "@components/indicador/indicador.component";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, Observable, switchMap, tap } from "rxjs";
import { IndicadorViewModelHttp } from "@api-vision360/models/indicador-view-model-http";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { ProfileEnum } from "@services/logged-user.service";
import { map } from "rxjs/operators";
import { IndicadorAderenciaViewModelHttp } from "@api-vision360/models/indicador-aderencia-view-model-http";
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-indicadores',
  standalone: true,
  imports: [CommonModule, IndicadorComponent, SecondsToTimePipe],
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnDestroy {

  private readonly destroyRef = inject(DestroyRef);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);

  @Input() resumido = false;

  @Input() logadosHeader?: string;
  // @Input() ausenciaHeader?: string;
  // @Input() silencioHeader?: string;
  // @Input() inatividadeHeader?: string;
  // @Input() improdutividadeHeader?: string;

  info$ = this.pageService.getRouteInfo(this.activatedRoute);

  loading = {
    indicadores: false,
    logado: false,
  };

  hasError = {
    indicadores: false,
    logado: false,
  };

  tryAgain = {
    indicadores: new BehaviorSubject(undefined),
    logado: new BehaviorSubject(undefined),
  }

  indicadores$: Observable<Array<IndicadorViewModelHttp & { icon?: string }>> = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    combineLatestWith(
      this.tryAgain.indicadores,
    ),
    switchMap(([data]) => {
      const profile = ProfileEnum[data.perfil];
      const service = this.pageService.getServiceByProfile(data.perfil) as any;
      const method = `api${profile}IdIndicadoresPost$Json`;
      const request = service?.[method]?.({
        id: data.matricula,
        body: data.filter,
      }) as Observable<Array<IndicadorViewModelHttp>>;

      this.loading.indicadores = true;
      this.hasError.indicadores = false;
      return request.pipe(
        takeUntilDestroyed(this.destroyRef),
        map(indicadores => {
          const getIcon = (indicador: IndicadorViewModelHttp) => {
            switch (indicador.header?.toLocaleLowerCase()) {
              case 'ausência': return 'bi bi-shield-exclamation';
              case 'silêncio': return 'bi bi-telephone-x';
              case 'improdutividade': return 'bi bi-clock-history';
              case 'inatividade': return 'bi bi-person-x'
              default: return ''
            }
          };

          return indicadores.map(indicador => ({
            ...indicador,
            icon: getIcon(indicador),
          }))
        }),
        finalize(() => this.loading.indicadores = false),
        catchError(() => {
          this.hasError.indicadores = true;
          return EMPTY;
        })
      );
    })
  );
  indicadores = toSignal(this.indicadores$);


  logado$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    combineLatestWith(
      this.tryAgain.logado,
    ),
    switchMap(([data]) => {
      const profile = ProfileEnum[data.perfil];
      const service = this.pageService.getServiceByProfile(data.perfil) as any;
      const method = `api${profile}IdAderenciaPost$Json`;
      const request = service?.[method]?.({
        id: data.matricula,
        body: data.filter,
      }) as Observable<IndicadorAderenciaViewModelHttp>;

      this.loading.logado = true;
      this.hasError.logado = false;
      return request.pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.logado = false),
        catchError(() => {
          this.hasError.logado = true;
          return EMPTY;
        })
      );
    })
  );
  logado = toSignal(this.logado$);

  ngOnDestroy() {
    this.tryAgain.indicadores.complete();
    this.tryAgain.logado.complete();
  }
}
