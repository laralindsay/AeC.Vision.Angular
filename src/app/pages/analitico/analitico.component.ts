import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestaoAnaliticoSelectButtonsComponent } from "@components/gestao-analitico-select-buttons/gestao-analitico-select-buttons.component";
import { PageComponent, PageTemplateDirective } from "@layout/page/page.component";
import { AnaliticoEventosComponent } from "@pages/analitico/analitico-eventos/analitico-eventos.component";
import { AnaliticoAcessosComponent } from "@pages/analitico/analitico-acessos/analitico-acessos.component";
import { BreadcrumbComponent } from "@components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-analitico',
  standalone: true,
  imports: [CommonModule, GestaoAnaliticoSelectButtonsComponent, PageComponent, PageTemplateDirective, AnaliticoEventosComponent, AnaliticoAcessosComponent, BreadcrumbComponent],
  templateUrl: './analitico.component.html',
  styleUrls: ['./analitico.component.scss']
})
export class AnaliticoComponent {

}
