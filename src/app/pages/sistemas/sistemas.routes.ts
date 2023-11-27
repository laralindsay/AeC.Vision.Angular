import { Routes } from '@angular/router';
import { canDeactivateGuard } from '@app/guards/can-deactivate.guard';
import { SistemasComponent } from '@pages/sistemas/sistemas.component';

export const SistemasRoutes: Routes = [
  {
    path: '',
    component: SistemasComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pages/sistemas/sistemas-list/sistemas-list.component').then(m => m.SistemasListComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('@pages/sistemas/sistema-form/sistema-form.component').then(m => m.SistemaFormComponent),
        canDeactivate: [canDeactivateGuard],
      },
      {
        path: ':sistemaId',
        loadComponent: () => import('@pages/sistemas/sistema-form/sistema-form.component').then(m => m.SistemaFormComponent),
        canDeactivate: [canDeactivateGuard],
      }
    ]
  },
];
