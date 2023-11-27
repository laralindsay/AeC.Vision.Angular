import { Component, DestroyRef, OnInit, computed, inject, signal, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardFiltroAlertasComponent } from '../dashboard-filtro-alertas/dashboard-filtro-alertas.component';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { AlertaRequestViewModelHttp, AlertaViewModelHttp } from '@api-vision360/models';
import { HttpAlertaService } from '@api-vision360/services';
import {
  Subject,
  debounceTime,
  startWith,
  combineLatestWith,
  switchMap,
  finalize,
  catchError,
  EMPTY,
} from 'rxjs';
import { LoadingComponent } from '@app/components/loading/loading.component';
import { SecondsToTimePipe } from '@app/pipes/seconds-to-time.pipe';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { FeedbackModalComponent } from "@components/feedback-modal/feedback-modal.component";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-dashboard-alertas',
  standalone: true,
  imports: [
    CommonModule,
    DashboardFiltroAlertasComponent,
    ButtonModule,
    RippleModule,
    TableModule,
    SecondsToTimePipe,
    RouterLink,
    LoadingComponent,
    TooltipModule,
  ],
  templateUrl: './dashboard-alertas.component.html',
  styleUrls: ['./dashboard-alertas.component.scss'],
})
export class DashboardAlertasComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly httpAlertaService = inject(HttpAlertaService);
  private readonly overlay = inject(Overlay);
  private readonly formBuilder = inject(FormBuilder);

  feedbackRef?: ComponentRef<FeedbackModalComponent>;
  tryAgain$ = new Subject<void>();

  loading = signal(false);
  hasError = signal(false);

  filterForm = this.formBuilder.nonNullable.group({
    top: 10,
    skip: 0,
    idOperador: this.formBuilder.control<number | null>(null),
    idSupervisor: this.formBuilder.control<number | null>(null),
    idCoordenador: this.formBuilder.control<number | null>(0),
    idGerente: this.formBuilder.control<number | null>(0),
    idGerenteExecutivo: this.formBuilder.control<number | null>(0),
    idDiretor: this.formBuilder.control<number | null>(0),
    tipoAlerta: 0,
    statusAlerta: 0,
    duracaoAlerta: 0,
  });

  data$ = this.filterForm.valueChanges.pipe(
    debounceTime(500),
    startWith(this.filterForm.value),
    combineLatestWith(
      this.tryAgain$.pipe(startWith(undefined))
    ),
    switchMap(([filtro]) => {
      this.loading.set(true);
      this.hasError.set(false);

      const body = {
        ...filtro
      } as AlertaRequestViewModelHttp;

      return this.httpAlertaService.apiAlertaPost$Json({body}).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.loading.set(false);
        }),
        catchError((error) => {
          this.hasError.set(true);
          return EMPTY;
        })
      );
    })
  );
  data = toSignal(this.data$, {initialValue: undefined});

  tableData = computed(() => {
    if ( this.loading() || this.hasError() ) {
      return undefined;
    }
    return this.data();
  })

  tryAgain() {
    this.tryAgain$.next();
  }

  getRowData(rowData: any): AlertaViewModelHttp {
    return rowData;
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    const first = (event.first ?? 0);
    const rows = (event.rows ?? 10);
    this.filterForm.patchValue({
      top: rows,
      skip: first,
    });
  }

  openFeedbackModal(event: MouseEvent, alerta: AlertaViewModelHttp) {
    if ( this.feedbackRef?.instance ) {
      this.feedbackRef.destroy();
    }

    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().flexibleConnectedTo(event.target as Element).withPositions([
        { overlayY: 'bottom', overlayX: 'end', originY: 'center', originX: 'center' }
      ]),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    const feedbackComponent = new ComponentPortal(FeedbackModalComponent);

    this.feedbackRef = overlayRef.attach(feedbackComponent);
    this.feedbackRef.instance.load(alerta.id ?? 0);
    this.feedbackRef.instance.closed$.subscribe(value => {
      if ( value ) {
        alerta.idStatusOcorrencia = 1;
        alerta.statusOcorrencia = 'LIDO';
      }
      this.feedbackRef?.destroy();
    });
  }
}
