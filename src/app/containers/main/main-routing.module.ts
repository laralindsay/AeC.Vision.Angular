import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '@containers/main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard'
          },
          {
            path: 'dashboard',
            loadChildren: () => import('@pages/dashboard/dashboard.routes').then(m => m.DashboardRoutes),
          },
          {
            path: 'gestao',
            loadChildren: () => import('@pages/gestao/gestao.routes').then(m => m.GestaoRoutes),
          },
          {
            path: 'analitico',
            loadChildren: () => import('@pages/analitico/analitico.routes').then(m => m.AnaliticoRoutes),
          },
          {
            path: 'chamadas',
            loadChildren: () => import('@pages/chamadas/chamadas.routes').then(m => m.ChamadasRoutes),
          },
          {
            path: 'perguntas-frequentes',
            loadChildren: () => import('@app/pages/perguntas-frequentes/perguntas-frequentes.module').then(m => m.PerguntasFrequentesModule)
          },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }
