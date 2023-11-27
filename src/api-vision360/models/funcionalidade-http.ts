/* tslint:disable */
/* eslint-disable */
import { AcaoHttp } from './acao-http';
import { ItemHttp } from './item-http';
import { PerfilFuncionalidadeHttp } from './perfil-funcionalidade-http';
import { ProjetoHttp } from './projeto-http';
import { UsuarioFuncionalidadeHttp } from './usuario-funcionalidade-http';
export interface FuncionalidadeHttp {
  acao?: AcaoHttp;
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  id?: number;
  idAcao?: number;
  idItem?: number;
  idProjeto?: number;
  item?: ItemHttp;
  nome?: null | string;
  perfisFuncionalidade?: null | Array<PerfilFuncionalidadeHttp>;
  projeto?: ProjetoHttp;
  usuarioAtualizacao?: null | string;
  usuarioFuncionalidades?: null | Array<UsuarioFuncionalidadeHttp>;
}
