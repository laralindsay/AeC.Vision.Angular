import { AdministradoresComponent } from '@pages/administradores/administradores.component';
import { Routes } from '@angular/router';
import { canDeactivateGuard } from '@app/guards/can-deactivate.guard';

export const AdministradoresRoutes: Routes = [
  {
    path: '',
    component: AdministradoresComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@pages/administradores/administradores-list/administradores-list.component').then(m => m.AdministradoresListComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('@pages/administradores/administradores-form/administradores-form.component').then(m => m.AdministradoresFormComponent),
        canDeactivate: [canDeactivateGuard],
      },
      {
        path: ':administradorId',
        loadComponent: () => import('@pages/administradores/administradores-form/administradores-form.component').then(m => m.AdministradoresFormComponent),
        canDeactivate: [canDeactivateGuard],
      }
    ]
  },
];
