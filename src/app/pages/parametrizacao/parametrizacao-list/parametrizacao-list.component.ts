import { Component, computed, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '@components/breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoadingComponent } from '@components/loading/loading.component';
import { MessageComponent } from '@components/message/message.component';
import { PageComponent, PageTemplateDirective } from '@layout/page/page.component';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { ConfirmationService } from 'primeng/api';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastService } from '@services/toast.service';
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  debounceTime,
  EMPTY,
  finalize,
  startWith,
  switchMap,
  tap
} from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { HttpParametrizacaoService } from '@api-vision360/services';
import { ParametrizacaoViewModelHttp } from '@api-vision360/models';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-parametrizacao-list',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ButtonModule, InputTextModule, LoadingComponent, MessageComponent, PageComponent, PageTemplateDirective, PaginatorModule, RippleModule, TableModule, TooltipModule, ReactiveFormsModule, RouterLink, CheckboxModule],
  templateUrl: './parametrizacao-list.component.html',
  styleUrls: ['./parametrizacao-list.component.scss']
})
export class ParametrizacaoListComponent implements OnDestroy {

  private readonly destroyRef = inject(DestroyRef);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly toastService = inject(ToastService);

  private readonly httpParametrizacaoService = inject(HttpParametrizacaoService);

  columns = [
    { field: 'tipoParametrizacao', header: 'Parametro' },
    { field: 'valor', header: 'Valor' },
    { field: 'nivelLog', header: 'Nível de log' },
  ];

  filterForm = inject(FormBuilder).group({
    nome: [''],
    tempoInatividade: [],
  });

  breadcrumbs: BreadcrumbItem[] = [
    { label: 'PARAMETRIZAÇÃO', icon: 'pi pi-sliders-h' },
  ];

  tableLazyLoad$ = new BehaviorSubject<TableLazyLoadEvent | undefined>(undefined);
  tryAgain$ = new BehaviorSubject<void>(undefined);

  deleting: { [s: number]: boolean } = {};
  loading = signal(false);
  hasError = signal(false);
  parametrizacoes$ = this.filterForm.valueChanges.pipe(
    debounceTime(500),
    startWith(this.filterForm.value),
    combineLatestWith(
      this.tableLazyLoad$,
      this.tryAgain$,
    ),
    switchMap(([filter, lazyLoad]) => {
      this.loading.set(true);
      this.hasError.set(false);

      const rows = lazyLoad?.rows ?? 10;
      const page = ((lazyLoad?.first ?? 0) / rows) + 1;
      return this.httpParametrizacaoService.apiParametrizacaoGet$Json({
        tamanhoPagina: rows,
        numeroPagina: page,
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
  parametrizacoes = toSignal(this.parametrizacoes$);

  parametrizacoesTableData = computed(() => {
    if ( this.loading() || this.hasError() ) {
      return undefined;
    }
    return this.parametrizacoes();
  });

  ngOnDestroy() {
    this.tryAgain$.complete();
    this.tableLazyLoad$.complete();
  }

  confirmDelete($event: Event, item: ParametrizacaoViewModelHttp) {
    this.confirmationService.confirm({
      key: 'popup',
      target: $event.target as EventTarget,
      header: 'Excluir Parametrização',
      message: `Deseja excluir a parametrização ${item.valor}?`,
      icon: 'fa-solid fa-trash-alt',
      acceptLabel: 'Excluir',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.doDelete(item);
      },
      rejectLabel: 'Cancelar',
    })
  }

  private doDelete(item: ParametrizacaoViewModelHttp) {
    const id = item.id ?? 0;
    this.deleting[id] = true;
    this.httpParametrizacaoService.apiParametrizacaoIdDelete$Json({ id }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.deleting[id] = false),
      tap(() => {
        this.toastService.success('Parametrização excluída com sucesso');
        this.tryAgain();
      }),
      catchError(error => {
        this.toastService.error('Erro ao excluir projeto', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
        return EMPTY;
      })
    ).subscribe();
  }

  tryAgain() {
    this.tryAgain$.next();
  }

  getRowData(rowData: any): ParametrizacaoViewModelHttp {
    return rowData;
  }

  onLazyLoad($event: TableLazyLoadEvent) {
    this.tableLazyLoad$.next($event);
  }
}
