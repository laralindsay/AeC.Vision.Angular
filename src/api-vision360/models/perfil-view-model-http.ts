/* tslint:disable */
/* eslint-disable */
import { PerfilFuncionalidadeHttp } from './perfil-funcionalidade-http';
import { PerfilProjetoHttp } from './perfil-projeto-http';
export interface PerfilViewModelHttp {
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  id?: number;
  nome?: null | string;
  perfilFuncionalidades?: null | Array<PerfilFuncionalidadeHttp>;
  perfilProjetos?: null | Array<PerfilProjetoHttp>;
  usuarioAtualizacao?: null | string;
}
