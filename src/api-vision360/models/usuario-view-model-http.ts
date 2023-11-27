/* tslint:disable */
/* eslint-disable */
import { PerfilHttp } from './perfil-http';
import { UsuarioFuncionalidadeHttp } from './usuario-funcionalidade-http';
export interface UsuarioViewModelHttp {
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  gerirAdministrador?: boolean;
  gerirParametrizacao?: boolean;
  gerirSistema?: boolean;
  id?: number;
  idPerfil: number;
  loginRede: string;
  matricula?: null | string;
  nome?: null | string;
  perfil?: PerfilHttp;
  usuarioAtualizacao?: null | string;
  usuarioFuncionalidades?: null | Array<UsuarioFuncionalidadeHttp>;
}
