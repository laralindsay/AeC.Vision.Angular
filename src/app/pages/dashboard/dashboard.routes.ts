import { Routes } from '@angular/router';
import { DashboardComponent } from "@pages/dashboard/dashboard.component";
import { ProfileEnum } from "@services/logged-user.service";

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'diretor/:matricula',
        component: DashboardComponent,
        data: { idPerfil: ProfileEnum.Diretor },
      },
      {
        path: 'gerente-executivo/:matricula',
        component: DashboardComponent,
        data: { idPerfil: ProfileEnum.GerenteExecutivo },
      },
      {
        path: 'gerente/:matricula',
        component: DashboardComponent,
        data: { idPerfil: ProfileEnum.Gerente },
      },
      {
        path: 'coordenador/:matricula',
        component: DashboardComponent,
        data: { idPerfil: ProfileEnum.Coordenador },
      },
      {
        path: 'supervisor/:matricula',
        component: DashboardComponent,
        data: { idPerfil: ProfileEnum.Supervisor },
      },
    ]
  },
];
