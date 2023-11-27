/* tslint:disable */
/* eslint-disable */
import { PerfilHttp } from './perfil-http';
import { UsuarioFuncionalidadeHttp } from './usuario-funcionalidade-http';
export interface UsuarioHttp {
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  id?: number;
  idPerfil?: number;
  loginRede?: null | string;
  matricula?: null | string;
  nome?: null | string;
  perfil?: PerfilHttp;
  usuarioAtualizacao?: null | string;
  usuarioFuncionalidades?: null | Array<UsuarioFuncionalidadeHttp>;
}
