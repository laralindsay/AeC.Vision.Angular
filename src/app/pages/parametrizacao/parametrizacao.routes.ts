import { Routes } from '@angular/router';
import { canDeactivateGuard } from '@app/guards/can-deactivate.guard';
import { ParametrizacaoComponent } from '@pages/parametrizacao/parametrizacao.component';

export const ParametrizacaoRoutes: Routes = [
  {
    path: '',
    component: ParametrizacaoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pages/parametrizacao/parametrizacao-list/parametrizacao-list.component').then(m => m.ParametrizacaoListComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('@pages/parametrizacao/parametrizacao-form/parametrizacao-form.component').then(m => m.ParametrizacaoFormComponent),
        canDeactivate: [canDeactivateGuard],
      },
      {
        path: ':parametrizacaoId',
        loadComponent: () => import('@pages/parametrizacao/parametrizacao-form/parametrizacao-form.component').then(m => m.ParametrizacaoFormComponent),
        canDeactivate: [canDeactivateGuard],
      }
    ]
  },
];
