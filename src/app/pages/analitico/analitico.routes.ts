import { Routes } from '@angular/router';
import { ProfileEnum } from "@services/logged-user.service";
import { AnaliticoComponent } from "@pages/analitico/analitico.component";

export const AnaliticoRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AnaliticoComponent
      },
      {
        path: 'diretor/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.Diretor },
      },
      {
        path: 'gerente-executivo/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.GerenteExecutivo },
      },
      {
        path: 'gerente/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.Gerente },
      },
      {
        path: 'coordenador/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.Coordenador },
      },
      {
        path: 'supervisor/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.Supervisor },
      },
      {
        path: 'operador/:matricula',
        component: AnaliticoComponent,
        data: { idPerfil: ProfileEnum.Operador },
      },
    ]
  },
];
