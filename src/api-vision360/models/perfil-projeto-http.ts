/* tslint:disable */
/* eslint-disable */
import { PerfilHttp } from './perfil-http';
import { ProjetoHttp } from './projeto-http';
export interface PerfilProjetoHttp {
  idPerfil?: number;
  idProjeto?: number;
  perfil?: PerfilHttp;
  projeto?: ProjetoHttp;
}
