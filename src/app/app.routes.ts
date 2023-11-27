import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { canMatchAdminGuard } from '@guards/can-match-admin.guard';
import { onlyLoggedGuard } from '@guards/only-logged.guard';
import { onlyNotLoggedGuard } from '@guards/only-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('@containers/auth/auth.module').then(m => m.AuthModule),
    canActivate: [onlyNotLoggedGuard],
    canActivateChild: [onlyNotLoggedGuard],
  },
  {
    path: 'main',
    loadChildren: () => import('@containers/main/main.module').then(m => m.MainModule),
    canActivate: [onlyLoggedGuard],
    canActivateChild: [onlyLoggedGuard],
    canMatch: [canMatchAdminGuard(false)]
  },
  {
    path: 'admin',
    loadChildren: () => import('@containers/admin/admin.module').then(m => m.AdminModule),
    canActivate: [onlyLoggedGuard],
    canActivateChild: [onlyLoggedGuard],
    canMatch: [canMatchAdminGuard(true)]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
