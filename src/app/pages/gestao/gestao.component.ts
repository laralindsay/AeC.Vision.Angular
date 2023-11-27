import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent, PageTemplateDirective } from "@layout/page/page.component";
import { GestaoResumoComponent } from "@pages/gestao/gestao-resumo/gestao-resumo.component";
import { GestaoTop10Component } from "@pages/gestao/gestao-top10/gestao-top10.component";
import { GestaoTopOfensoresComponent } from "@pages/gestao/gestao-top-ofensores/gestao-top-ofensores.component";
import { GestaoProdutividadeComponent } from "@pages/gestao/gestao-produtividade/gestao-produtividade.component";
import { GestaoResumoOperadorComponent } from "@pages/gestao/gestao-resumo-operador/gestao-resumo-operador.component";
import { ActivatedRoute } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";
import { LoggedUserService, ProfileEnum } from "@services/logged-user.service";
import { combineLatestWith } from "rxjs";
import { PageService } from "@services/page.service";
import { GestaoAnaliticoSelectButtonsComponent } from "@components/gestao-analitico-select-buttons/gestao-analitico-select-buttons.component";
import { BreadcrumbComponent } from "@components/breadcrumb/breadcrumb.component";
import { map } from "rxjs/operators";
import { CalendarModule } from "primeng/calendar";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-gestao',
  standalone: true,
  imports: [
    CommonModule,
    PageTemplateDirective,
    PageComponent,
    GestaoResumoComponent,
    GestaoResumoOperadorComponent,
    GestaoTop10Component,
    GestaoTopOfensoresComponent,
    GestaoProdutividadeComponent,
    GestaoAnaliticoSelectButtonsComponent,
    BreadcrumbComponent,
    CalendarModule,
    ReactiveFormsModule
  ],
  templateUrl: './gestao.component.html',
  styleUrls: ['./gestao.component.scss']
})
export class GestaoComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly pageService = inject(PageService);

  protected readonly ProfileEnum = ProfileEnum;

  filterForm = this.pageService.filterForm;

  info$ = this.pageService.getRouteInfoWithoutFilter(this.route);
  info = toSignal(this.info$);

  isCurrentUser = toSignal(
    this.info$.pipe(
      combineLatestWith(
        this.loggedUserService.user$
      ),
      map(([routeInfo, currentUser]) => {
        return routeInfo?.matricula === Number(currentUser?.matricula);
      })
    )
  );

  dataInicio = toSignal(this.filterForm.controls.data.valueChanges, { initialValue: this.filterForm.value.data });
  dataFim = toSignal(this.filterForm.controls.dataFim.valueChanges, { initialValue: this.filterForm.value.dataFim });
  maxDataInicio = computed(() => {
    const dataFim = this.dataFim();
    return dataFim ? new Date(dataFim) : new Date();
  });
  minDataFim = computed(() => {
    const dataInicio = this.dataInicio();
    return dataInicio ? new Date(dataInicio) : new Date(2000, 0, 1);
  });
  maxDataFim = signal(new Date())

  ngOnInit() {
    if ( this.isCurrentUser() ) {
      this.pageService.filterForm.reset();
    }
  }
}
