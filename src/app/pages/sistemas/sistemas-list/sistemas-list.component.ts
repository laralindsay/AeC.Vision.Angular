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
import { ToastService } from '@services/toast.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, catchError, combineLatestWith, debounceTime, EMPTY, finalize, startWith, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { HttpSistemaService } from '@api-vision360/services';
import { SistemaViewModelHttp } from '@api-vision360/models';

@Component({
  selector: 'app-sistemas-list',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ButtonModule, InputTextModule, LoadingComponent, MessageComponent, PageComponent, PageTemplateDirective, PaginatorModule, RippleModule, TableModule, TooltipModule, ReactiveFormsModule, RouterLink],
  templateUrl: './sistemas-list.component.html',
  styleUrls: ['./sistemas-list.component.scss']
})
export class SistemasListComponent implements OnDestroy {

  private readonly destroyRef = inject(DestroyRef);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly toastService = inject(ToastService);

  private readonly httpSistemaService = inject(HttpSistemaService);

  columns = [
    {field: 'tipoSistema', header: 'Tipo de sistema'},
    {field: 'descricao', header: 'Descrição'},
    {field: 'executavel', header: 'Executável'},
  ];

  filterForm = inject(FormBuilder).group({
    tipoSistema: [''],
    descricao: [''],
    executavel: [''],
  });

  breadcrumbs: BreadcrumbItem[] = [
    {label: 'SISTEMAS', icon: 'pi pi-wrench'},
  ];

  tableLazyLoad$ = new BehaviorSubject<TableLazyLoadEvent | undefined>(undefined);
  tryAgain$ = new BehaviorSubject<void>(undefined);

  deleting: { [s: number]: boolean } = {};
  loading = signal(false);
  hasError = signal(false);
  sistemas$ = this.filterForm.valueChanges.pipe(
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
      return this.httpSistemaService.apiSistemaGet$Json({
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
  sistemas = toSignal(this.sistemas$);

  sistemasTableData = computed(() => {
    if ( this.loading() || this.hasError() ) {
      return undefined;
    }
    return this.sistemas();
  });

  ngOnDestroy() {
    this.tryAgain$.complete();
    this.tableLazyLoad$.complete();
  }

  confirmDelete($event: Event, item: SistemaViewModelHttp) {
    this.confirmationService.confirm({
      key: 'popup',
      target: $event.target as EventTarget,
      header: 'Excluir Sistema',
      message: `Deseja excluir o sistema ${item.descricao}?`,
      icon: 'fa-solid fa-trash-alt',
      acceptLabel: 'Excluir',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.doDelete(item);
      },
      rejectLabel: 'Cancelar',
    })
  }

  private doDelete(item: SistemaViewModelHttp) {
    const id = item.id ?? 0;
    this.deleting[id] = true;
    this.httpSistemaService.apiSistemaIdDelete$Json({id}).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.deleting[id] = false),
      tap(() => {
        this.toastService.success('Sistema excluído com sucesso');
        this.tryAgain();
      }),
      catchError(error => {
        this.toastService.error('Erro ao excluir sistema', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
        return EMPTY;
      })
    ).subscribe();
  }

  tryAgain() {
    this.tryAgain$.next();
  }

  onLazyLoad($event: TableLazyLoadEvent) {
    this.tableLazyLoad$.next($event);
  }
}
