import { Routes } from '@angular/router';
import { ProfileEnum } from "@services/logged-user.service";
import { GestaoComponent } from "@pages/gestao/gestao.component";

export const GestaoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GestaoComponent
      },
      {
        path: 'diretor/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.Diretor },
      },
      {
        path: 'gerente-executivo/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.GerenteExecutivo },
      },
      {
        path: 'gerente/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.Gerente },
      },
      {
        path: 'coordenador/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.Coordenador },
      },
      {
        path: 'supervisor/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.Supervisor },
      },
      {
        path: 'operador/:matricula',
        component: GestaoComponent,
        data: { idPerfil: ProfileEnum.Operador },
      },
    ]
  },
];
