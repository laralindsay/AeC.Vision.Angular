/* tslint:disable */
/* eslint-disable */
import { AderenciaAcessoHttp } from './aderencia-acesso-http';
import { TipoAcessoHttp } from './tipo-acesso-http';
export interface AcessoRequestViewModelHttp {
  aderenciaAcesso?: AderenciaAcessoHttp;
  idCoordenador?: null | number;
  idDiretor?: null | number;
  idGerente?: null | number;
  idGerenteExecutivo?: null | number;
  idOperador?: null | number;
  idSupervisor?: null | number;
  skip?: number;
  tipoAcesso?: TipoAcessoHttp;
  top?: number;
}
