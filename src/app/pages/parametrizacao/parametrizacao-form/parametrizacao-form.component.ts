import { Component, computed, DestroyRef, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItem } from '@components/breadcrumb/breadcrumb.component';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PageComponent, PageTemplateDirective } from '@layout/page/page.component';
import { RippleModule } from 'primeng/ripple';
import { CanDeactivateComponent } from '@guards/can-deactivate.guard';
import { ToastService } from '@services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { TreeModule } from 'primeng/tree';
import { CheckboxModule } from 'primeng/checkbox';
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, map, Observable, switchMap, tap } from 'rxjs';
import { HttpParametrizacaoService } from '@api-vision360/services';
import { AmbienteViewModelHttp, ParametrizacaoViewModelHttp } from '@api-vision360/models';
import { DatasourcePDropdownDirective } from '@app/directives/datasource-p-dropdown.directive';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-parametrizacao-form',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, ButtonModule, ChipsModule, DropdownModule, FormsModule, InputTextModule, PageComponent, PageTemplateDirective, ReactiveFormsModule, RippleModule, AccordionModule, TreeModule, CheckboxModule, DatasourcePDropdownDirective, SkeletonModule],
  templateUrl: './parametrizacao-form.component.html',
  styleUrls: ['./parametrizacao-form.component.scss']
})
export class ParametrizacaoFormComponent implements OnInit, CanDeactivateComponent {

  private readonly toastService = inject(ToastService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly httpParametrizacaoService = inject(HttpParametrizacaoService);

  loading = {
    addOrUpdate: false,
    parametrizacao: false,
    sistemas: false,
  };

  hasError = {
    addOrUpdate: false,
    parametrizacao: false,
    sistemas: false,
  };
  
  listSistemasId: number[] = [];

  form = this.formBuilder.group({
    idAmbiente: this.formBuilder.nonNullable.control<number | undefined>(1),
    idNivelLog: this.formBuilder.nonNullable.control<number | undefined>(0),
    idTipoParametrizacao: this.formBuilder.nonNullable.control<number | undefined>(1),
    idVersao: this.formBuilder.nonNullable.control<number | undefined>(1),
    valor: this.formBuilder.nonNullable.control<string | null>(''),
    tipoParametrizacao: this.formBuilder.nonNullable.control<string | null>(''),
    ambiente: this.formBuilder.nonNullable.control<string | null>(''),
    nivelLog: this.formBuilder.nonNullable.control<string | null>(''),
    versao: this.formBuilder.nonNullable.control<string | null>(''),
    tempoInatividadeMouse: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoInatividadeMouseChamada: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoInatividadeTeclado: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoInatividadeTecladoChamada: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoAusencia: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoSilencio: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoSilencioFullTime: this.formBuilder.nonNullable.control<number | undefined>(20),
    tempoPollingSistema: this.formBuilder.nonNullable.control<number | undefined>(10),
    monitoramentoAtivado: this.formBuilder.nonNullable.control<boolean | undefined>(true),
    monitoramentoHabilitado: this.formBuilder.nonNullable.control<boolean | undefined>(true),
    capturaTela: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    ausencia: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    improdutividade: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    pausa: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    pausaLocker: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    pausaWDE: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    ligacao: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    ligacaoLocker: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    ligacaoWDE: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    silencio: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    silencioFullTime: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    inatividade: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    inatividadeMouseTeclado: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    inatividadeMouseTecladoChamada: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    sistema: this.formBuilder.nonNullable.control<boolean | undefined>(false),
    sistemaWebTitulo: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    sistemaWebUrl: this.formBuilder.nonNullable.control<boolean | undefined>({value: false, disabled: true}),
    parametrizacaoSistemaIds: this.formBuilder.nonNullable.control<null| Array<number>>([]),
    sistemasPadrao: [{value: true, disabled: true}],
  });

  tryAgain$ = new BehaviorSubject<void>(undefined);

  tiposParametrizacao$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoTipoGet$Json();
  versoes$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoVersaoGet$Json();
  ambientes$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoAmbienteGet$Json();
  niveisLog$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoNivelLogGet$Json();

  operacoes$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoOperacaoGet$Json();
  segmentos$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoSegmentoGet$Json();
  sites$: Observable<AmbienteViewModelHttp[]> = this.httpParametrizacaoService.apiParametrizacaoSiteGet$Json();

  breadcrumbs = computed<BreadcrumbItem[]>(() => {
    const id = this.parametrizacaoId();
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'PARAMETRIZAÇÕES', icon: 'pi pi-sliders-h', routerLink: '../' },
    ];

    if (id) {
      breadcrumbs.push({ label: 'EDITAR PARAMETRIZAÇÃO' });
      return breadcrumbs;
    }

    breadcrumbs.push({ label: 'NOVA PARAMETRIZAÇÃO' });
    return breadcrumbs;
  });

  sistemas$ =  this.tryAgain$.pipe(
    switchMap(() => {
      this.loading.sistemas = true;
      return this.httpParametrizacaoService.apiParametrizacaoSistemasGet$Json()
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map(response => {
          return response.map(sistema => {
            return {
              ...sistema, 
              tipos: sistema.tipos?.map(tipo => {
                const getTipoSistema = () => {
                  switch(tipo.idTipoSistema){
                    case 1: return {nome: 'Web', icone: 'fi-rr-disco-ball'};
                    case 2: return {nome: 'Desktop', icone: 'fi-rr-computer'};
                    case 3: return {nome: 'Diretórios', icone: 'fi-rr-folder'};
                    default: return {nome: 'Sistema', icone: 'fi-rr-computer'}
                  }
                }
                const tipoSistema = getTipoSistema();
                const sistemas = tipo.sistemas?.map(sistema => ({ ...sistema, checked: false }));
                return {
                  ...tipo,
                  tipoSistema: {
                    ...tipoSistema
                  },              
                  sistemas: sistemas
                }
              })
            }
          })
        }),
        finalize(() => {
          this.loading.sistemas = false;
        }),
        catchError(() => {
          this.hasError.sistemas = true;
          return EMPTY;
        })
      )
    })
  );
  
  sistemas = toSignal(this.sistemas$);

  monitoramento$ = this.form.controls.monitoramentoAtivado.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.monitoramentoHabilitado.enable();
      }
      else {
        this.form.controls.monitoramentoHabilitado.setValue(false, { emitEvent: false });
        this.form.controls.monitoramentoHabilitado.disable();
      }
    })
  );
  
  monitoramento = toSignal(this.monitoramento$);

  pausa$ = this.form.controls.pausa.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.pausaWDE.setValue(false, { emitEvent: false });
        this.form.controls.pausaWDE.enable();        
        this.form.controls.pausaLocker.setValue(true, { emitEvent: false });
        this.form.controls.pausaLocker.enable();
      }
      else {
        this.form.controls.pausaWDE.setValue(false, { emitEvent: false });
        this.form.controls.pausaWDE.disable();        
        this.form.controls.pausaLocker.setValue(false, { emitEvent: false });
        this.form.controls.pausaLocker.disable();
      }
    })
  );
  
  pausa = toSignal(this.pausa$);

  pausaLocker$ = this.form.controls.pausaLocker.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.pausaWDE.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.pausaLocker.disabled) {
        this.form.controls.pausaLocker.setValue(true, { emitEvent: false });
      }
    })
  )

  pausalocker = toSignal(this.pausaLocker$);

  pausaWDE$ = this.form.controls.pausaWDE.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.pausaLocker.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.pausaWDE.disabled) {
        this.form.controls.pausaWDE.setValue(true, { emitEvent: false });
      }
    })
  )

  pausaWDE = toSignal(this.pausaWDE$);

  sistema$ = this.form.controls.sistema.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.sistemaWebUrl.setValue(false, { emitEvent: false });
        this.form.controls.sistemaWebUrl.enable();        
        this.form.controls.sistemaWebTitulo.setValue(true, { emitEvent: false });
        this.form.controls.sistemaWebTitulo.enable();
      }
      else {
        this.form.controls.sistemaWebUrl.setValue(false, { emitEvent: false });
        this.form.controls.sistemaWebUrl.disable();        
        this.form.controls.sistemaWebTitulo.setValue(false, { emitEvent: false });
        this.form.controls.sistemaWebTitulo.disable();
      }
    })
  );
  
  sistema = toSignal(this.sistema$);

  sistemaWebUrl$ = this.form.controls.sistemaWebUrl.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.sistemaWebTitulo.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.sistemaWebUrl.disabled) {
        this.form.controls.sistemaWebUrl.setValue(true, { emitEvent: false });
      }
    })
  )

  sistemaWebUrl = toSignal(this.sistemaWebUrl$);

  sistemaWebTitulo$ = this.form.controls.sistemaWebTitulo.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.sistemaWebUrl.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.sistemaWebTitulo.disabled) {
        this.form.controls.sistemaWebTitulo.setValue(true, { emitEvent: false });
      }
    })
  )

  sistemaWebTitulo = toSignal(this.sistemaWebTitulo$);

  ligacao$ = this.form.controls.ligacao.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.silencio.enable();
        this.form.controls.silencioFullTime.setValue(false, { emitEvent: false });
        this.form.controls.silencioFullTime.disable();

        this.form.controls.ligacaoWDE.setValue(false, { emitEvent: false });
        this.form.controls.ligacaoWDE.enable();
        this.form.controls.ligacaoLocker.setValue(true, { emitEvent: false });
        this.form.controls.ligacaoLocker.enable();

        if(this.form.controls.inatividade.value){
          this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
          this.form.controls.inatividadeMouseTecladoChamada.enable();
        }
        else {
          this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
          this.form.controls.inatividadeMouseTecladoChamada.disable();
        }
      }
      else {
        this.form.controls.silencio.setValue(false, { emitEvent: false });
        this.form.controls.silencio.disable();
        this.form.controls.silencioFullTime.setValue(false, { emitEvent: false });
        this.form.controls.silencioFullTime.enable();

        this.form.controls.ligacaoWDE.setValue(false, { emitEvent: false });
        this.form.controls.ligacaoWDE.disable();
        this.form.controls.ligacaoLocker.setValue(false, { emitEvent: false });
        this.form.controls.ligacaoLocker.disable();

        this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
        this.form.controls.inatividadeMouseTecladoChamada.disable();
        
        if(this.form.controls.inatividade.value){
          this.form.controls.inatividadeMouseTeclado.setValue(true, { emitEvent: false });
          this.form.controls.inatividadeMouseTeclado.enable();
        }
      }
    })
  );
  
  ligacao = toSignal(this.ligacao$);

  ligacaoLocker$ = this.form.controls.ligacaoLocker.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.ligacaoWDE.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.ligacaoLocker.disabled) {
        this.form.controls.ligacaoLocker.setValue(true, { emitEvent: false });
      }
    })
  )

  ligacaoLocker = toSignal(this.ligacaoLocker$);

  ligacaoWDE$ = this.form.controls.ligacaoWDE.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.ligacaoLocker.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.ligacaoWDE.disabled) {
        this.form.controls.ligacaoWDE.setValue(true, { emitEvent: false });
      }
    })
  )

  ligacaoWDE = toSignal(this.ligacaoWDE$);

  silencioFullTime$ = this.form.controls.silencioFullTime.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.ligacao.setValue(false, { emitEvent: false });
        this.form.controls.ligacao.disable();        
      }
      else {
        this.form.controls.ligacao.enable();
      }
    })
  );
  
  inatividade$ = this.form.controls.inatividade.valueChanges.pipe(
    tap(value => {
      if(value){
        this.form.controls.inatividadeMouseTeclado.setValue(true, { emitEvent: false });
        this.form.controls.inatividadeMouseTeclado.enable();   
        
        if(this.form.controls.ligacao.value){
          this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
          this.form.controls.inatividadeMouseTecladoChamada.enable();
        }
        else {
          this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
          this.form.controls.inatividadeMouseTecladoChamada.disable();
        }
      }
      else {
        this.form.controls.inatividadeMouseTeclado.setValue(false, { emitEvent: false });
        this.form.controls.inatividadeMouseTeclado.disable();
        this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
        this.form.controls.inatividadeMouseTecladoChamada.disable();
      }
    })
  );
  
  inatividade = toSignal(this.inatividade$);

  inatividadeMouseTeclado$ = this.form.controls.inatividadeMouseTeclado.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.inatividadeMouseTecladoChamada.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.inatividadeMouseTeclado.disabled) {
        this.form.controls.inatividadeMouseTeclado.setValue(true, { emitEvent: false });
      }
    })
  )

  inatividadeMouseTeclado = toSignal(this.inatividadeMouseTeclado$);

  inatividadeMouseTecladoChamada$ = this.form.controls.inatividadeMouseTecladoChamada.valueChanges.pipe(
    tap(value => {
      if(value) {
        this.form.controls.inatividadeMouseTeclado.setValue(false, { emitEvent: false });
      }
      if(!value && !this.form.controls.inatividadeMouseTecladoChamada.disabled) {
        this.form.controls.inatividadeMouseTecladoChamada.setValue(value, { emitEvent: false });
      }
    })
  )

  inatividadeMouseTecladoChamada = toSignal(this.inatividadeMouseTecladoChamada$);
  
  parametrizacaoId$ = this.route.paramMap.pipe(
    map(x => x.get('parametrizacaoId'))
  );

  parametrizacaoId = toSignal(this.parametrizacaoId$);

  parametrizacao$ = this.parametrizacaoId$.pipe(
    combineLatestWith(
      this.tryAgain$
    ),
    switchMap(([parametrizacaoId]) => {
      this.loading.parametrizacao = true;      
      const id = parametrizacaoId;
      return this.httpParametrizacaoService.apiParametrizacaoIdGet$Json({
        id: id ? parseInt(id) : 0,
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(parametrizacao => {
          this.form.patchValue({
            ...parametrizacao,
            parametrizacaoSistemaIds: [...parametrizacao.parametrizacaoSistemaIds!],
            pausa: parametrizacao.pausaLocker || parametrizacao.pausaWDE,
            ligacao: parametrizacao.ligacaoLocker || parametrizacao.ligacaoWDE,
            inatividade: parametrizacao.inatividadeMouseTeclado || parametrizacao.inatividadeMouseTecladoChamada,
          });
        }),
        finalize(() => this.loading.parametrizacao = false),
        catchError(() => {
          this.hasError.parametrizacao = true;
          return EMPTY;
        })
      );
    }),
  );

  parametrizacao = toSignal(this.parametrizacao$);

  constructor() {
    effect(() => {
      if(!this.parametrizacao() || !this.sistemas()) {
        return;
      }
  
      this.listSistemasId = this.form.controls.parametrizacaoSistemaIds.value!;
      this.sistemas()?.forEach(
        sistema => sistema.tipos?.forEach(
          tipo => tipo.sistemas?.filter(
            sistema => this.listSistemasId.includes(sistema.id!)
          ).forEach(sistema => sistema.checked = true)
        )
      );
    })
  }

  ngOnInit() { }

  submit() {
    this.form.markAllAsTouched();
    if ( this.form.invalid ) {
      this.toastService.warn('Preencha todos os campos obrigatórios');
      return;
    }

    if (this.form.controls.tempoAusencia.value! < 20) {
      this.toastService.warn('Tempo mínimo de ausência deve ser 20 segundos');
      return;
    }

    if (this.form.controls.tempoSilencio.value! < 20) {
        this.toastService.warn('Tempo mínimo de silêncio deve ser 20 segundos');
        return;
    }

    if (this.form.controls.tempoSilencioFullTime.value! < 20) {
      this.toastService.warn('Tempo mínimo de silêncio fulltime deve ser 20 segundos');
      return;
    }

    if (this.form.controls.tempoPollingSistema.value! < 10) {      
      this.toastService.warn('Tempo mínimo de Polling Sistema deve ser 10 segundos');
      return;
    }

    if (this.form.controls.tempoInatividadeMouse.value! < 20 ||
      this.form.controls.tempoInatividadeTeclado.value!< 20 ||
      this.form.controls.tempoInatividadeMouseChamada.value! < 20 ||
      this.form.controls.tempoInatividadeTecladoChamada.value! < 20) {
      this.toastService.warn('Tempos mínimos de inatividade devem ser 20 segundos');
      return;
    }

    if (!this.form.controls.valor.value) {
      this.toastService.warn('Escolha ou insira o valor do parâmetro');
      return;
    }

    if(this.parametrizacaoId()){
      return this.update();
    }

    this.add();
  }

  private fromForm(): ParametrizacaoViewModelHttp {
    return ({
      ...this.form.getRawValue(),
    });
  }

  private add() {
    this.loading.addOrUpdate = true;
    this.httpParametrizacaoService.apiParametrizacaoPost$Json({
      body: this.fromForm(),
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.loading.addOrUpdate = false),
    ).subscribe({
      next: () => {
        this.toastService.success('Parametrização cadastrada com sucesso');
        this.form.markAsPristine();
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: (error) => {
        this.loading.addOrUpdate = false;
        this.toastService.error('Não foi possível criar a parametrização.', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
      }
    });
  }

  private update() {
    this.loading.addOrUpdate = true;

    const id = this.parametrizacaoId();
    const data = this.fromForm();
    data.id = id ? parseInt(id) : 0;

    this.httpParametrizacaoService.apiParametrizacaoIdPut$Json({
      id: id ? parseInt(id) : 0,
      body: data, 
    }).pipe(
      takeUntilDestroyed(this.destroyRef),
      finalize(() => this.loading.addOrUpdate = false),
    ).subscribe({
      next: () => {
        this.toastService.success('Parametrização alterada com sucesso');
        this.form.markAsPristine();
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error: (error) => {
        this.loading.addOrUpdate = false;
        this.toastService.error('Não foi possível alterar a parametrização.', error?.error?.descricaoMensagem ?? 'Erro desconhecido');
      },
    });
  }

  canDeactivate() {
    return !this.form.dirty;
  }

  addOrRemoveSistema(id: number, isChecked: boolean) {
    const listSistemasId = [...this.listSistemasId];
 
    if (isChecked) {
      listSistemasId.push(id);
    } else {
      const indexToRemove = listSistemasId.findIndex(item => item === id);
      if (indexToRemove !== -1) {
        listSistemasId.splice(indexToRemove, 1);
      }
    }
 
    this.listSistemasId = listSistemasId;
    this.form.controls.parametrizacaoSistemaIds.setValue(listSistemasId);
  }
}

