import { Component, computed, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {
  PageComponent,
  PageTemplateDirective,
} from '@layout/page/page.component';
import { RippleModule } from 'primeng/ripple';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ChipsModule } from 'primeng/chips';
import { ToastService } from '@services/toast.service';
import { CanDeactivateComponent } from '@guards/can-deactivate.guard';
import {
  BreadcrumbComponent,
  BreadcrumbItem,
} from '@components/breadcrumb/breadcrumb.component';
import { CheckboxModule } from 'primeng/checkbox';
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, map, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { HttpUsuarioService } from '@api-vision360/services';
import {
  AdministradorViewModelHttp,
  UsuarioViewModelHttp,
} from '@api-vision360/models';
@Component({
  selector: 'app-administradores-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    PageComponent,
    PageTemplateDirective,
    RippleModule,
    RouterLink,
    ChipsModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    CheckboxModule,
  ],
  templateUrl: './administradores-form.component.html',
  styleUrls: ['./administradores-form.component.scss'],
})
export class AdministradoresFormComponent
  implements OnInit, CanDeactivateComponent
{
  private readonly toastService = inject(ToastService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly httpUsuarioService = inject(HttpUsuarioService);
  private readonly destroyRef = inject(DestroyRef);

  loading = false;
  hasError = false;
  matriculasRegexp: RegExp = /[, ]/;
  values: string[] | undefined;

  form = this.formBuilder.group({
    matricula: this.formBuilder.nonNullable.control<string | null>(''),
    gerirAdministrador: this.formBuilder.nonNullable.control<
      boolean | undefined
    >(true),
    gerirParametrizacao: this.formBuilder.nonNullable.control<
      boolean | undefined
    >(true),
    gerirSistema: this.formBuilder.nonNullable.control<boolean | undefined>(
      true
    ),
  });
  
  tryAgain$ = new BehaviorSubject<void>(undefined);

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const id = this.administradorId();    
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'ADMINISTRADORES', routerLink: '../', icon: 'pi pi-user' },
    ];

    if (id) {
      breadcrumbs.push({ label: 'EDITAR ADMINISTRADOR' });
      return breadcrumbs;
    }

    breadcrumbs.push({ label: 'NOVO ADMINISTRADOR' });
    return breadcrumbs;
  });  

  administradorId$ = this.route.paramMap.pipe(map((x) => x.get('administradorId')));

  administradorId = toSignal(this.administradorId$);

  administrador$ = this.administradorId$.pipe(
    combineLatestWith(
      this.tryAgain$
    ),
    switchMap(([administradorId]) => {
      this.loading = true;
      const id = administradorId;
      return this.httpUsuarioService.apiUsuarioIdGet$Json({
        id: id ? parseInt(id) : 0
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(administrador => {
          this.form.patchValue({
            ...administrador,
          });
          this.form.controls.matricula.disable();
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
  )

  administrador = toSignal(this.administrador$);

  ngOnInit() {}

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastService.warn('Preencha todos os campos obrigatórios');
      return;
    }
    if(this.administradorId()){
      return this.update();
    }

    this.add();
  }

  private fromForm(): AdministradorViewModelHttp {
    return {
      ...this.form.getRawValue(),
    };
  }

  canDeactivate() {
    return !this.form.dirty;
  }

  private add() {
    this.loading = true;
    this.httpUsuarioService
      .apiUsuarioPost$Json({
        body: this.fromForm(),
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: () => {
          this.toastService.success('Administrador cadastrado com sucesso');
          this.form.markAsPristine();
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {
          this.toastService.error(
            'Não foi possível criar o administrador.',
            error?.error?.descricaoMensagem ?? 'Erro desconhecido'
          );
        },
      });
  }

  private update() {
    this.loading = true;

    const id = this.administradorId();
    const data = this.fromForm();
    data.id = id ? parseInt(id) : 0;

    this.httpUsuarioService
      .apiUsuarioIdPut$Json({
        id: id ? parseInt(id) : 0,
        body: data,
      })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => (this.loading = false))
      )
      .subscribe({
        next: () => {
          this.toastService.success('Administrador alterado com sucesso');
          this.form.markAsPristine();
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error) => {
          this.loading = false;
          this.toastService.error(
            'Não foi possível alterar o administrador.',
            error?.error?.descricaoMensagem ?? 'Erro desconhecido'
          );
        },
      });
  }
}
