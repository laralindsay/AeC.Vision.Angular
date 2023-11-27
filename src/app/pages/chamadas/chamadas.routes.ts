import { Routes } from '@angular/router';
import { ProfileEnum } from "@services/logged-user.service";
import { ChamadasComponent } from "@pages/chamadas/chamadas.component";

export const ChamadasRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'diretor/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.Diretor },
      },
      {
        path: 'gerente-executivo/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.GerenteExecutivo },
      },
      {
        path: 'gerente/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.Gerente },
      },
      {
        path: 'coordenador/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.Coordenador },
      },
      {
        path: 'supervisor/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.Supervisor },
      },
      {
        path: 'operador/:matricula',
        component: ChamadasComponent,
        data: { idPerfil: ProfileEnum.Operador },
      },
    ]
  },
  {
    path: ':perfil/:matricula/:idChamada',
    loadChildren: () => import('@pages/chamada/chamada.routes').then(m => m.ChamadaRoutes),
  }
];
