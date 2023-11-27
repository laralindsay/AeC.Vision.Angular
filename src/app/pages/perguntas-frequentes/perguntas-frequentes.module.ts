import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PerguntasFrequentesComponent } from './perguntas-frequentes.component';
import { PerguntasFrequentesRoutingModule } from './perguntas-frequentes-routing.module';
import { PageComponent, PageTemplateDirective } from '@app/layout/page/page.component';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [PerguntasFrequentesComponent],
  imports: [
    CommonModule,
    PerguntasFrequentesRoutingModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    BreadcrumbComponent,
    PageComponent,
    PageTemplateDirective
  ]
})
export class PerguntasFrequentesModule { }
