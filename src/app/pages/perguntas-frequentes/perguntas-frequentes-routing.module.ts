import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PerguntasFrequentesComponent } from './perguntas-frequentes.component';

const routes: Routes = [
  {
    path: '',
    component: PerguntasFrequentesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntasFrequentesRoutingModule { }
