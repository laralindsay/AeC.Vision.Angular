/* tslint:disable */
/* eslint-disable */
import { ClienteHttp } from './cliente-http';
import { PerfilProjetoHttp } from './perfil-projeto-http';
export interface ProjetoHttp {
  cliente?: ClienteHttp;
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  id?: number;
  idCliente?: number;
  nome?: null | string;
  perfilProjetos?: null | Array<PerfilProjetoHttp>;
  usuarioAtualizacao?: null | string;
}
