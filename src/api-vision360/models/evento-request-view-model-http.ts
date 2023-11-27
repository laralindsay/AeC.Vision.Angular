/* tslint:disable */
/* eslint-disable */
import { TipoEventoHttp } from './tipo-evento-http';
export interface EventoRequestViewModelHttp {
  data?: null | string;
  idCoordenador?: null | number;
  idDiretor?: null | number;
  idGerente?: null | number;
  idGerenteExecutivo?: null | number;
  idOperacao?: null | number;
  idOperador?: null | number;
  idSegmento?: null | number;
  idSupervisor?: null | number;
  skip?: number;
  tipoEvento?: TipoEventoHttp;
  top?: number;
}
