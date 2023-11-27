/* tslint:disable */
/* eslint-disable */
import { SistemaTituloViewModelHttp } from './sistema-titulo-view-model-http';
export interface SistemaViewModelHttp {
  descricao?: null | string;
  executavel?: null | string;
  id?: number;
  idOperacao?: null | number;
  idSegmento?: null | number;
  idTipoSistema?: number;
  padrao?: boolean;
  sistemaTituloViewModel?: null | Array<SistemaTituloViewModelHttp>;
  tipoSistema?: null | string;
}
