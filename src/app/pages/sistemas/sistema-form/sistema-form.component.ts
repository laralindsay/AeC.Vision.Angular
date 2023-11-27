import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '@components/breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent, PageTemplateDirective } from '@layout/page/page.component';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { CanDeactivateComponent } from '@guards/can-deactivate.guard';
import { ToastService } from '@services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpSistemaService } from '@api-vision360/services';
import { SistemaTituloViewModelHttp, SistemaViewModelHttp, TipoSistemaViewModelHttp } from '@api-vision360/models';
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, map, Observable, switchMap, tap } from 'rxjs';
import { DatasourcePDropdownDirective } from '@app/directives/datasource-p-dropdown.directive';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sistema-form',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ButtonModule, ChipsModule, FormsModule, PageComponent, PageTemplateDirective, PaginatorModule, RippleModule, ReactiveFormsModule, DatasourcePDropdownDirective,],
  templateUrl: './sistema-form.component.html',
  styleUrls: ['./sistema-form.component.scss']
})
export class SistemaFormComponent implements OnInit, CanDeactivateComponent {

  private readonly toastService = inject(ToastService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly httpSistemaService = inject(HttpSistemaService);

  readonly titulosPermitidosRegex = /[, ]/;

  loading = false;
  hasError = false;
  isTypeDesktop = false;
  
  listSistemaTitulo?: string[] = [];

  form = this.formBuilder.group({
    descricao: this.formBuilder.nonNullable.control<string | null>(''),
    executavel: this.formBuilder.nonNullable.control<string | null>({value: '', disabled: true}),
    idTipoSistema: this.formBuilder.nonNullable.control<number | undefined>(1),
    sistemaTituloViewModel: this.formBuilder.nonNullable.control<null | Array<SistemaTituloViewModelHttp>>([]),
    tipoSistema: this.formBuilder.nonNullable.control<string | null>(''),
  });

  tryAgain$ = new BehaviorSubject<void>(undefined);

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const id = this.sistemaId();
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'SISTEMAS', icon: 'pi pi-wrench', routerLink: '../' },
    ];

    if (id) {
      breadcrumbs.push({ label: 'EDITAR SISTEMA' });
      return breadcrumbs;
    }

    breadcrumbs.push({ label: 'NOVO SISTEMA' });
    return breadcrumbs;
  });

  tiposSistemas$: Observable<TipoSistemaViewModelHttp[]> = this.httpSistemaService.apiSistemaTipoGet$Json();

  sistemaId$ = this.route.paramMap.pipe(
    map(x => x.get('sistemaId'))
  );

  sistemaId = toSignal(this.sistemaId$);

  sistema$ = this.sistemaId$.pipe(
    combineLatestWith(
      this.tryAgain$
    ),
    switchMap(([sistemaId]) => {
      this.loading = true;
      const id = sistemaId;
      return this.httpSistemaService.apiSistemaIdGet$Json({
        id: id ? parseInt(id) : 0
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(sistema => {
          this.form.patchValue({
            ...sistema,
            sistemaTituloViewModel: [...sistema.sistemaTituloViewModel!]
          }); 
          this.listaTitulos();
        }),
        finalize(() => {
          this.loading = false;
        }),
        catchError(() => {
          this.hasError = true;
          return EMPTY;
        })
      );
    }),
  );

  sistema = toSignal(this.sistema$);

  idTipoSistema$ = this.form.controls.idTipoSistema.valueChanges.pipe(
    tap(value => {
      this.isTypeDesktop = false;
      this.form.controls.executavel.enable();

      if(value === 1) {
        this.form.controls.executavel.disable();
      }
      if(value === 2) {
        this.isTypeDesktop = true;
      }
    })
  )

  idTipoSistema = toSignal(this.idTipoSistema$);

  listaTitulos() {
    this.listSistemaTitulo = this.form.controls.sistemaTituloViewModel.value?.map((item: any) => item.titulo);
  }

  ngOnInit() { }

  submit() {
    this.form.markAllAsTouched();
    if ( this.form.invalid ) {
      this.toastService.warn('Preencha todos os campos obrigatórios');
      return;
    }

    if(this.sistemaId()){
      return this.update();
    }

    this.add();
  }

  private fromForm(): SistemaViewModelHttp {
    return ({
      ...this.form.getRawValue(),
    });
  }

  private add() {
    this.loading = true;
    this.httpSistemaService.apiSistemaPost$Json({
      body: this.fromForm()
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.loading = false),
    ).subscribe({
      next: () => {
        this.toastService.success('Sistema cadastrado com sucesso');
        this.form.markAsPristine();
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: (error) => {
        this.toastService.error('Não foi possível criar o sistema.', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
      }
    });
  }

  private update() {
    this.loading = true;

    const id = this.sistemaId();

    const data = this.fromForm();
    data.id = id ? parseInt(id) : 0;

    data.sistemaTituloViewModel = data.sistemaTituloViewModel?.map(
      titulo => ({
        titulo: titulo.titulo,
        id: titulo.id
      })
    );

    this.httpSistemaService.apiSistemaIdPut$Json({
      id: id ? parseInt(id) : 0,
      body: data
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.loading = false),
    ).subscribe({
      next: () => {
        this.toastService.success('Sistema alterado com sucesso.');
        this.form.markAsPristine();
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: (error) => {
        this.loading = false;
        this.toastService.error('Não foi possível alterar o sistema.', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
      },
    });
  }

  canDeactivate() {
    return !this.form.dirty;
  }

  onAddChip(event: any) {
    const listSistemaTitulo = this.form.controls.sistemaTituloViewModel.value;

    listSistemaTitulo?.push({
      titulo: event.value
    });
    
    this.form.controls.sistemaTituloViewModel.setValue(listSistemaTitulo);
  }

  onRemoveChip(event: any){
    const listSistemaTitulo = this.form.controls.sistemaTituloViewModel.value;
  
    const itemExists = listSistemaTitulo?.find(x=> x.titulo == event.value);
    
    if (itemExists) {
      const index = listSistemaTitulo?.indexOf(event.value);
      if(index)
        listSistemaTitulo?.splice(index, 1);      
    }
    
    this.form.controls.sistemaTituloViewModel.setValue(listSistemaTitulo);
  }
}
