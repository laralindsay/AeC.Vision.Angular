/* tslint:disable */
/* eslint-disable */
import { AcaoHttp } from './acao-http';
import { ItemHttp } from './item-http';
import { ProjetoHttp } from './projeto-http';
export interface FuncionalidadeViewModelHttp {
  acao?: AcaoHttp;
  dataAtualizacao?: null | string;
  dataCriacao?: string;
  id?: number;
  idAcao?: number;
  idItem?: number;
  idProjeto?: number;
  item?: ItemHttp;
  nome?: null | string;
  projeto?: ProjetoHttp;
  usuarioAtualizacao?: null | string;
}
