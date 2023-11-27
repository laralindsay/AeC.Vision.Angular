import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { ChartModule } from "primeng/chart";
import { LoadingComponent } from "@components/loading/loading.component";
import { SelectButtonModule } from "primeng/selectbutton";
import { HttpDiretorService } from "@api-vision360/services/http-diretor.service";
import { HttpGerenteExecutivoService } from "@api-vision360/services/http-gerente-executivo.service";
import { HttpGerenteService } from "@api-vision360/services/http-gerente.service";
import { HttpCoordenadorService } from "@api-vision360/services/http-coordenador.service";
import { HttpSupervisorService } from "@api-vision360/services/http-supervisor.service";
import { HttpOperadorService } from "@api-vision360/services/http-operador.service";
import { catchError, combineLatestWith, EMPTY, finalize, Observable, startWith, Subject, switchMap, tap } from "rxjs";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs/operators";
import { ProfileEnum } from "@services/logged-user.service";
import { ChartData, ChartOptions } from "chart.js";
import { PacoteProdutividadeModelHttp } from "@api-vision360/models/pacote-produtividade-model-http";
import { DateTime } from "luxon";
import { PageService } from "@services/page.service";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";

@Component({
  selector: 'app-gestao-produtividade',
  standalone: true,
  imports: [CommonModule, ChartModule, LoadingComponent, SelectButtonModule],
  templateUrl: './gestao-produtividade.component.html',
  styleUrls: ['./gestao-produtividade.component.scss']
})
export class GestaoProdutividadeComponent  implements OnDestroy {
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

  request$ = this.info$.pipe(
    combineLatestWith(
      this.tryAgain$.pipe(startWith(undefined)),
    ),
    takeUntilDestroyed(this.destroyRef),
    switchMap(([data]) => {
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

      const serviceMethod = `api${getServiceName()}IdProdutividadePost$Json`;

      const request = (getService() as any)?.[serviceMethod]({
        id: data.matricula,
        body: data.filter
      }) as Observable<PacoteProdutividadeModelHttp>;

      this.loading.set(true);
      this.hasError.set(false);
      return request.pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading.set(false);
        }),
        map(x => x.produtividadeModels),
        catchError(error => {
          this.hasError.set(true);
          return EMPTY;
        }),
      );
    }),
  );
  request = toSignal(this.request$);

  hasData = computed(() => {
    return !!this.request()?.length;
  })
  data = computed(() => {
    return {
      labels: this.request()?.map(x => {
        const luxon = DateTime.fromISO(x.data ?? '');
        return luxon.toFormat('dd/MM');
      }),
      datasets: [
        {
          label: 'Improdutividade',
          data: this.request()?.map(x => x.improdutividade),
          backgroundColor: '#8fe2f3',
          borderWidth: 0,
          datalabels: {
            color: '#003f5f'
          }
        },
        {
          label: 'Inatividade',
          data: this.request()?.map(x => x.inatividade),
          backgroundColor: '#00bce4',
          borderWidth: 0,
          datalabels: {
            color: '#003f5f'
          }
        },
        {
          label: 'Silêncio',
          data: this.request()?.map(x => x.silencio),
          backgroundColor: '#005daa',
          borderWidth: 0,
          datalabels: {
            color: 'white'
          }
        },
        {
          label: 'Ausência',
          data: this.request()?.map(x => x.ausencia),
          backgroundColor: '#003f5f',
          borderWidth: 0,
          datalabels: {
            color: 'white'
          }
        }
      ]
    } as ChartData;
  });

  options: ChartOptions = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            return [(context.dataset.label || ''), ((context.parsed.y || 0) + '%')].join(': ');
          }
        }
      },
      datalabels: {
        formatter: (value) => `${value}%`
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        }
      },
      y: {
        stacked: true,
        display: false,
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
