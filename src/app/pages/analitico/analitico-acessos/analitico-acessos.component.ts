import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    AnaliticoEventosFilterComponent
} from "@pages/analitico/analitico-eventos-filter/analitico-eventos-filter.component";
import { LoadingComponent } from "@components/loading/loading.component";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { SharedModule } from "primeng/api";
import { TableLazyLoadEvent, TableModule } from "primeng/table";
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, startWith, switchMap } from "rxjs";
import { EventoViewModelHttp } from "@api-vision360/models/evento-view-model-http";
import { HttpAcessoService } from "@api-vision360/services/http-acesso.service";
import { AderenciaAcessoHttp } from "@api-vision360/models/aderencia-acesso-http";
import { TipoAcessoHttp } from "@api-vision360/models/tipo-acesso-http";
import { AcessoViewModelHttp } from "@api-vision360/models/acesso-view-model-http";
import { ProfileEnum } from "@services/logged-user.service";
import {
  AnaliticoAcessosFilterComponent
} from "@pages/analitico/analitico-acessos-filter/analitico-acessos-filter.component";

@Component({
  selector: 'app-analitico-acessos',
  standalone: true,
  imports: [CommonModule, AnaliticoEventosFilterComponent, LoadingComponent, SecondsToTimePipe, SharedModule, TableModule, AnaliticoAcessosFilterComponent],
  templateUrl: './analitico-acessos.component.html',
  styleUrls: ['./analitico-acessos.component.scss']
})
export class AnaliticoAcessosComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly httpAcessoService = inject(HttpAcessoService);

  info$ = this.pageService.getRouteInfo(this.activatedRoute);
  info = toSignal(this.info$);

  tableLazyLoad = new BehaviorSubject<TableLazyLoadEvent | undefined>(undefined);

  filterForm = this.formBuilder.nonNullable.group({
    aderenciaAcesso: this.formBuilder.nonNullable.control<AderenciaAcessoHttp>(0),
    tipoAcesso: this.formBuilder.nonNullable.control<TipoAcessoHttp>(0),
  });

  loading = signal(false);
  hasError = signal(false);

  tryAgain$ = new BehaviorSubject(undefined);
  data$ = this.info$.pipe(
    combineLatestWith(
      this.filterForm.valueChanges.pipe(
        startWith(this.filterForm.value)
      ),
      this.tableLazyLoad,
      this.tryAgain$
    ),
    switchMap(([routeInfo, filter, tableLazyLoad]) => {
      this.loading.set(true);
      this.hasError.set(false);
      return this.httpAcessoService.apiAcessoPost$Json({
        body: {
          aderenciaAcesso: filter.aderenciaAcesso,
          tipoAcesso: filter.tipoAcesso,
          idOperador: (routeInfo?.perfil === ProfileEnum.Operador ? routeInfo?.matricula : 0),
          idSupervisor: (routeInfo?.perfil === ProfileEnum.Supervisor ? routeInfo?.matricula : 0),
          idCoordenador: (routeInfo?.perfil === ProfileEnum.Coordenador ? routeInfo?.matricula : 0),
          idGerente: (routeInfo?.perfil === ProfileEnum.Gerente ? routeInfo?.matricula : 0),
          idGerenteExecutivo: (routeInfo?.perfil === ProfileEnum.GerenteExecutivo ? routeInfo?.matricula : 0),
          idDiretor: (routeInfo?.perfil === ProfileEnum.Diretor ? routeInfo?.matricula : 0),
          top: tableLazyLoad?.rows ?? 10,
          skip: tableLazyLoad?.first ?? 0,
        }
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
        catchError(() => {
          this.hasError.set(true);
          return EMPTY;
        })
      );
    })
  );
  data = toSignal(this.data$);
  tableData = computed(() => {
    if ( this.loading() || this.hasError() ) {
      return undefined;
    }
    return this.data();
  })

  ngOnDestroy() {
    this.tryAgain$.complete();
  }

  tryAgain() {
    this.tryAgain$.next(undefined);
  }

  getRowData(rowData: any): AcessoViewModelHttp {
    return rowData;
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    this.tableLazyLoad.next(event);
  }
}
