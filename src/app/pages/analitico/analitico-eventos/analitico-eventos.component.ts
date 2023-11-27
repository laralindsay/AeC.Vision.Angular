import { Component, ComponentRef, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageService } from "@services/page.service";
import { ActivatedRoute } from "@angular/router";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { FormBuilder } from "@angular/forms";
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  EMPTY,
  finalize,
  startWith,
  switchMap, takeUntil, tap
} from "rxjs";
import { TipoEventoHttp } from "@api-vision360/models/tipo-evento-http";
import { AccordionModule } from "primeng/accordion";
import { ButtonModule } from "primeng/button";
import { LoadingComponent } from "@components/loading/loading.component";
import { RippleModule } from "primeng/ripple";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";
import { TableLazyLoadEvent, TableModule } from "primeng/table";
import { EventoViewModelHttp } from "@api-vision360/models/evento-view-model-http";
import { AnaliticoEventosFilterComponent } from "@pages/analitico/analitico-eventos-filter/analitico-eventos-filter.component";
import { ProfileEnum } from "@services/logged-user.service";
import { HttpEventoService } from "@api-vision360/services/http-evento.service";
import { ComponentPortal } from "@angular/cdk/portal";
import { EventoDetalhesComponent } from "@components/evento-detalhes/evento-detalhes.component";
import { Overlay } from "@angular/cdk/overlay";

@Component({
  selector: 'app-analitico-eventos',
  standalone: true,
  imports: [CommonModule, AccordionModule, ButtonModule, LoadingComponent, RippleModule, SecondsToTimePipe, TableModule, AnaliticoEventosFilterComponent],
  templateUrl: './analitico-eventos.component.html',
  styleUrls: ['./analitico-eventos.component.scss']
})
export class AnaliticoEventosComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly pageService = inject(PageService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly httpEventoService = inject(HttpEventoService);
  private readonly overlay = inject(Overlay);

  modalRef?: ComponentRef<EventoDetalhesComponent>;

  info$ = this.pageService.getRouteInfo(this.activatedRoute);
  info = toSignal(this.info$);

  tableLazyLoad = new BehaviorSubject<TableLazyLoadEvent | undefined>(undefined);

  filterForm = this.formBuilder.nonNullable.group({
    tipoEvento: this.formBuilder.nonNullable.control<TipoEventoHttp | undefined>(1),
    operacao: this.formBuilder.control<number | undefined>(undefined),
    segmento: this.formBuilder.control<number | undefined>(undefined),
    supervisor: this.formBuilder.control<number | undefined>(undefined),
    operador: this.formBuilder.control<number | undefined>(undefined),
    data: this.formBuilder.control<string | undefined>(undefined),
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
      const request = this.httpEventoService.apiEventoPost$Json({
        body: {
          data: filter?.data,
          tipoEvento: filter.tipoEvento,
          idOperacao: filter.operacao,
          idSegmento: filter.segmento,
          idOperador: (routeInfo?.perfil === ProfileEnum.Operador ? routeInfo?.matricula : filter?.operador ?? 0),
          idSupervisor: (routeInfo?.perfil === ProfileEnum.Supervisor ? routeInfo?.matricula : filter?.supervisor ?? 0),
          idCoordenador: (routeInfo?.perfil === ProfileEnum.Coordenador ? routeInfo?.matricula : 0),
          idGerente: (routeInfo?.perfil === ProfileEnum.Gerente ? routeInfo?.matricula : 0),
          idGerenteExecutivo: (routeInfo?.perfil === ProfileEnum.GerenteExecutivo ? routeInfo?.matricula : 0),
          idDiretor: (routeInfo?.perfil === ProfileEnum.Diretor ? routeInfo?.matricula : 0),
          top: tableLazyLoad?.rows ?? 10,
          skip: tableLazyLoad?.first ?? 0,
        }
      });

      this.loading.set(true);
      this.hasError.set(false);
      return request.pipe(
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

  getRowData(rowData: any): EventoViewModelHttp {
    return rowData;
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    this.tableLazyLoad.next(event);
  }

  openDetail(event: MouseEvent, item: EventoViewModelHttp) {
    if ( this.modalRef?.instance ) {
      this.modalRef.destroy();
    }

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      disposeOnNavigation: true,
      hasBackdrop: true,
    });
    const feedbackComponent = new ComponentPortal(EventoDetalhesComponent);

    this.modalRef = overlayRef.attach(feedbackComponent);
    this.modalRef.instance.load(item.idRegistro ?? 0, item.idTipoOcorrencia ?? 0);

    overlayRef.outsidePointerEvents().pipe(
      takeUntil(overlayRef.detachments()),
      takeUntilDestroyed(this.destroyRef),
      tap(() => {
        this.modalRef?.destroy();
      })
    ).subscribe();
  }
}
