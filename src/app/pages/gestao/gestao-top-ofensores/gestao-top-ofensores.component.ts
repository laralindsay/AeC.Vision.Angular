import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from "primeng/chart";
import { LoadingComponent } from "@components/loading/loading.component";
import { SelectButtonModule } from "primeng/selectbutton";
import { ActivatedRoute } from "@angular/router";
import { HttpDiretorService } from "@api-vision360/services/http-diretor.service";
import { HttpGerenteExecutivoService } from "@api-vision360/services/http-gerente-executivo.service";
import { HttpGerenteService } from "@api-vision360/services/http-gerente.service";
import { HttpCoordenadorService } from "@api-vision360/services/http-coordenador.service";
import { HttpSupervisorService } from "@api-vision360/services/http-supervisor.service";
import { HttpOperadorService } from "@api-vision360/services/http-operador.service";
import { catchError, combineLatestWith, EMPTY, finalize, Observable, startWith, Subject, switchMap, tap } from "rxjs";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ProfileEnum } from "@services/logged-user.service";
import { ChartData, ChartOptions } from "chart.js";
import { OfensorModelHttp } from "@api-vision360/models/ofensor-model-http";
import { PageService } from "@services/page.service";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";

@Component({
  selector: 'app-gestao-top-ofensores',
  standalone: true,
  imports: [CommonModule, ChartModule, LoadingComponent, SelectButtonModule, ReactiveFormsModule],
  templateUrl: './gestao-top-ofensores.component.html',
  styleUrls: ['./gestao-top-ofensores.component.scss']
})
export class GestaoTopOfensoresComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly pageService = inject(PageService);

  private readonly httpDiretorService = inject(HttpDiretorService);
  private readonly httpGerenteExecutivoService = inject(HttpGerenteExecutivoService);
  private readonly httpGerenteService = inject(HttpGerenteService);
  private readonly httpCoordenadorService = inject(HttpCoordenadorService);
  private readonly httpSupervisorService = inject(HttpSupervisorService);
  private readonly httpOperadorService = inject(HttpOperadorService);

  loading = signal(false);
  hasError = signal(false);
  canShow = computed(() => {
    return !this.loading() && !this.hasError();
  });

  tryAgain$ = new Subject<void>();
  info$ = this.pageService.getRouteInfo(this.route);

  filtroTipo = new FormControl(TipoRelatorio.Improdutividade, { nonNullable: true });
  filtroTipoOptions = [
    { label: 'Improdutividade', value: TipoRelatorio.Improdutividade },
    { label: 'Inatividade', value: TipoRelatorio.Inatividade, },
    { label: 'Silêncio', value: TipoRelatorio.Silencio },
    { label: 'Ausência', value: TipoRelatorio.Ausencia },
  ];

  filtroAderente = new FormControl(TipoAderente.Inaderente, { nonNullable: true });
  filtroAderenteOptions = [
    // { label: 'Aderente', value: TipoAderente.Aderente },
    { label: 'Inaderente', value: TipoAderente.Inaderente },
  ];


  request$: Observable<Array<OfensorModelHttp>> = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    combineLatestWith(
      this.filtroTipo.valueChanges.pipe(startWith(this.filtroTipo.value)),
      this.filtroAderente.valueChanges.pipe(startWith(this.filtroAderente.value)),
      this.tryAgain$.pipe(startWith(undefined)),
    ),
    switchMap(([data, tipoRelatorio, tipoAderente]) => {
      const getService = () => {
        switch (data.perfil) {
          case ProfileEnum.Diretor: return this.httpDiretorService;
          case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService;
          case ProfileEnum.Gerente: return this.httpGerenteService;
          case ProfileEnum.Coordenador: return this.httpCoordenadorService;
          case ProfileEnum.Supervisor: return this.httpSupervisorService;
          default: return this.httpOperadorService;
        }
      }
      const getServiceName = () => ProfileEnum[data.perfil] ?? 'Operador';
      const getTipoName = () => TipoRelatorio[tipoRelatorio];
      const getAderente = () => TipoAderente[tipoAderente];

      const serviceMethod = `api${getServiceName()}IdOfensores${getTipoName()}${getAderente()}Post$Json`;

      const request = (getService() as any)?.[serviceMethod]({
        id: data.matricula,
        body: data.filter
      });

      this.loading.set(true);
      this.hasError.set(false);
      return request.pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading.set(false);
        }),
        catchError(() => {
          this.hasError.set(true);
          return EMPTY;
        }),
      ) as Observable<Array<OfensorModelHttp>>;
    }),
  );
  request = toSignal(this.request$);

  hasData = computed(() => {
    return !!this.request()?.length;
  })
  data = computed(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const primaryColor = documentStyle.getPropertyValue('--primary-color');
    const warningColor = documentStyle.getPropertyValue('--bs-warning');
    const color = this.filtroAderente.value === TipoAderente.Aderente ? primaryColor : warningColor;

    return {
      labels: this.request()?.map(x => x.nome),
      datasets: [
        {
          label: 'Total',
          data: this.request()?.map(x => x.tempo),
          backgroundColor: color,
          borderWidth: 0,
        },
      ],
    } as ChartData;
  });

  options: ChartOptions = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: 'white',
        formatter: function(value, context) {
          return new SecondsToTimePipe().transform(value);
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Tempo total: ${new SecondsToTimePipe().transform(context.parsed.x)}`
          }
        }
      }
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  }

  tryAgain() {
    this.tryAgain$.next();
  }

  ngOnDestroy() {
    this.tryAgain$.complete();
  }
}


enum TipoRelatorio {
  Improdutividade,
  Inatividade,
  Silencio,
  Ausencia,
}

enum TipoAderente {
  Aderente,
  Inaderente,
}
