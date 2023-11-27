import {
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { LoadingComponent } from '@components/loading/loading.component';
import { RippleModule } from 'primeng/ripple';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink } from '@angular/router';
import { ToastService } from '@services/toast.service';
import { MessageComponent } from '@components/message/message.component';
import {
  PageComponent,
  PageTemplateDirective,
} from '@layout/page/page.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  catchError,
  combineLatestWith,
  debounceTime,
  EMPTY,
  finalize,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '@components/breadcrumb/breadcrumb.component';
import { HttpUsuarioService } from '@api-vision360/services';
import { AdministradorViewModelHttp } from '@api-vision360/models';

@Component({
  selector: 'app-administradores-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    LoadingComponent,
    RippleModule,
    TableModule,
    TooltipModule,
    RouterLink,
    MessageComponent,
    PageComponent,
    PageTemplateDirective,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    CheckboxModule,
  ],
  templateUrl: './administradores-list.component.html',
  styleUrls: ['./administradores-list.component.scss'],
})
export class AdministradoresListComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly confirmationService = inject(ConfirmationService);
  private readonly toastService = inject(ToastService);

  private readonly httpAdmUsuarioService = inject(HttpUsuarioService);

  checked: boolean = false;
  columns = [{ field: 'matricula', header: 'Matrícula' }];

  filterForm = inject(FormBuilder).group({
    matricula: [''],
  });

  breadcrumbs: BreadcrumbItem[] = [
    { label: 'ADMINISTRADORES', icon: 'pi pi-user' },
  ];

  tryAgain$ = new BehaviorSubject<void>(undefined);

  deleting: { [s: number]: boolean } = {};
  loading = signal(false);
  hasError = signal(false);
  administradores$ = this.filterForm.valueChanges.pipe(
    debounceTime(500),
    startWith(this.filterForm.value),
    combineLatestWith(this.tryAgain$),
    switchMap(([filter]) => {
      this.loading.set(true);
      this.hasError.set(false);

      if(filter.matricula && filter.matricula?.length >= 6){
        return this.httpAdmUsuarioService.apiUsuarioMatriculaIdGet$Json({
          id: parseInt(filter.matricula)
        }).pipe(
          takeUntilDestroyed(this.destroyRef),
          map(response => {
            return [response].flat();
          }),
          finalize(() => this.loading.set(false)),
          catchError(() => {
            this.hasError.set(true);
            return EMPTY;
          })
        );
      }

      return this.httpAdmUsuarioService.apiUsuarioGet$Json().pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
        catchError(() => {
          this.hasError.set(true);
          return EMPTY;
        })
      );
    })
  );
  administradores = toSignal(this.administradores$);

  administradoresTableData = computed(() => {
    if (this.loading() || this.hasError()) {
      return undefined;
    }
    return this.administradores();
  });

  ngOnDestroy() {
    this.tryAgain$.complete();
  }

  confirmDelete($event: Event, item: AdministradorViewModelHttp) {
    this.confirmationService.confirm({
      key: 'popup',
      target: $event.target as EventTarget,
      header: 'Excluir Administrador',
      message: `Deseja excluir a Administrador ${item.matricula}?`,
      icon: 'fa-solid fa-trash-alt',
      acceptLabel: 'Excluir',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.doDelete(item);
      },
      rejectLabel: 'Cancelar',
    });
  }

  private doDelete(item: AdministradorViewModelHttp) {
    const id = item.id ?? 0;
    this.deleting[id] = true;
    this.httpAdmUsuarioService
      .apiUsuarioIdDelete$Json({ id })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.deleting[id] = false)),
        tap(() => {
          this.toastService.success('Administrador excluído com sucesso');
          this.tryAgain();
        }),
        catchError((error) => {
          this.toastService.error(
            'Erro ao excluir administrador',
            error?.error?.descricaoMensagem ?? 'Erro desconhecido'
          );
          return EMPTY;
        })
      )
      .subscribe();
  }

  tryAgain() {
    this.tryAgain$.next();
  }

  getRowData(rowData: any): AdministradorViewModelHttp {
    return rowData;
  }
}

export interface AdministradorTableItem {
  id: number;
  matricula: number;
}
