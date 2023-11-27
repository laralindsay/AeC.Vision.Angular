import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { catchError, combineLatestWith, EMPTY, finalize, startWith, Subject, switchMap, tap } from "rxjs";
import { ProfileEnum } from "@services/logged-user.service";
import { HttpDiretorService } from "@api-vision360/services/http-diretor.service";
import { HttpGerenteExecutivoService } from "@api-vision360/services/http-gerente-executivo.service";
import { HttpGerenteService } from "@api-vision360/services/http-gerente.service";
import { HttpCoordenadorService } from "@api-vision360/services/http-coordenador.service";
import { HttpSupervisorService } from "@api-vision360/services/http-supervisor.service";
import { HttpOperadorService } from "@api-vision360/services";
import { map } from "rxjs/operators";
import { SelectButtonModule } from "primeng/selectbutton";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { ChartModule } from "primeng/chart";
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { LoadingComponent } from "@components/loading/loading.component";
import { PageService } from "@services/page.service";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";

@Component({
  selector: 'app-gestao-top10',
  standalone: true,
  imports: [CommonModule, SelectButtonModule, ReactiveFormsModule, ChartModule, LoadingComponent],
  templateUrl: './gestao-top10.component.html',
  styleUrls: ['./gestao-top10.component.scss']
})
export class GestaoTop10Component implements OnDestroy {
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

  filtroTipo = new FormControl(TipoSistema.Web, { nonNullable: true });
  filtroTipoOptions = [
    { label: 'Web', value: TipoSistema.Web },
    { label: 'Desktop', value: TipoSistema.Desktop, },
    { label: 'Diretório', value: TipoSistema.Diretorio },
  ];

  filtroAderente = new FormControl(TipoAderente.Aderente, { nonNullable: true });
  filtroAderenteOptions = [
    { label: 'Aderente', value: TipoAderente.Aderente },
    { label: 'Inaderente', value: TipoAderente.Inaderente },
  ];

  filtroTempo = new FormControl(TipoTempo.Acessos, { nonNullable: true });
  filtroTempoOptions = [
    { label: 'Por acessos', value: TipoTempo.Acessos },
    { label: 'Por tempo', value: TipoTempo.Tempo },
  ];

  webAderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasWebAderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  webInaderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasWebInaderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  desktopAderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasDesktopAderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  desktopInaderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasDesktopInaderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  diretorioAderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasDiretorioAderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  diretorioInaderente$ = this.info$.pipe(
    takeUntilDestroyed(this.destroyRef),
    switchMap(data => {
      switch (data.perfil) {
        case ProfileEnum.Diretor: return this.httpDiretorService.apiDiretorIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.GerenteExecutivo: return this.httpGerenteExecutivoService.apiGerenteExecutivoIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Gerente: return this.httpGerenteService.apiGerenteIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Coordenador: return this.httpCoordenadorService.apiCoordenadorIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
        case ProfileEnum.Supervisor: return this.httpSupervisorService.apiSupervisorIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
        default: return this.httpOperadorService.apiOperadorIdSistemasDiretorioInaderentePost$Json({ id: data.matricula, body: data.filter });
      }
    })
  );

  request$ = this.filtroTipo.valueChanges.pipe(
    startWith(this.filtroTipo.value),
    combineLatestWith(
      this.filtroAderente.valueChanges.pipe(
        startWith(this.filtroAderente.value),
      ),
      this.tryAgain$.pipe(startWith(undefined)),
    ),
    takeUntilDestroyed(this.destroyRef),
    switchMap(([tipo, aderente]) => {
      const getRequest = () => {
        if ( tipo === TipoSistema.Web) {
          return aderente === TipoAderente.Aderente ? this.webAderente$ : this.webInaderente$;
        } else if ( tipo === TipoSistema.Desktop ) {
          return aderente === TipoAderente.Aderente ? this.desktopAderente$ : this.desktopInaderente$;
        } else if ( tipo === TipoSistema.Diretorio ) {
          return aderente === TipoAderente.Aderente ? this.diretorioAderente$ : this.diretorioInaderente$;
        }
        return EMPTY;
      }

      this.loading.set(true);
      this.hasError.set(false);
      return getRequest().pipe(
        tap(x => {
          this.loading.set(false);
        }),
        catchError(error => {
          this.loading.set(false);
          this.hasError.set(true);
          return EMPTY;
        })
      );
    }),
  );
  request = toSignal(this.request$);

  filtroTempoValue = toSignal(this.filtroTempo.valueChanges, { initialValue: this.filtroTempo.value });

  hasData = computed(() => {
    return !!this.request()?.length;
  })
  data = computed(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const primaryColor = documentStyle.getPropertyValue('--primary-color');
    const warningColor = documentStyle.getPropertyValue('--bs-warning');
    const color = this.filtroAderente.value === TipoAderente.Aderente ? primaryColor : warningColor;

    return {
      labels: this.request()?.map(x => x.sistema),
      datasets: [
        {
          label: 'Total',
          data: this.request()?.map(x => x.total),
          backgroundColor: color,
          borderWidth: 0,
          hidden: this.filtroTempoValue() === TipoTempo.Tempo,
        },
        {
          label: 'Tempo',
          data: this.request()?.map(x => x.tempo),
          backgroundColor: color,
          borderWidth: 0,
          hidden: this.filtroTempoValue() === TipoTempo.Acessos,
        }
      ]
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
          if ( context.datasetIndex === TipoTempo.Acessos ) {
            return value;
          }
          const tempo = context.chart.data.datasets[1]?.data[context.dataIndex] as number;
          return new SecondsToTimePipe().transform(tempo);
        }
      },
      tooltip: {
        mode: 'y',
        intersect: false,
        callbacks: {
          label: (context) => {
            const total = context.chart.data.datasets[0]?.data[context.dataIndex] as number;
            const tempo = context.chart.data.datasets[1]?.data[context.dataIndex] as number;
            const tempoTime = new SecondsToTimePipe().transform(tempo);
            return `Acessos: ${total} (${tempoTime})`;
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

enum TipoSistema {
  Web = 'web',
  Desktop = 'desktop',
  Diretorio = 'diretorio'
}

enum TipoAderente {
  Aderente = 'aderente',
  Inaderente = 'inaderente',
}

enum TipoTempo {
  Acessos,
  Tempo,
}
