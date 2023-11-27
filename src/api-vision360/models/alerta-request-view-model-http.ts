/* tslint:disable */
/* eslint-disable */
import { DuracaoOcorrenciaHttp } from './duracao-ocorrencia-http';
import { StatusOcorrenciaHttp } from './status-ocorrencia-http';
import { TipoOcorrenciaHttp } from './tipo-ocorrencia-http';
export interface AlertaRequestViewModelHttp {
  duracaoAlerta?: DuracaoOcorrenciaHttp;
  idCoordenador?: null | number;
  idDiretor?: null | number;
  idGerente?: null | number;
  idGerenteExecutivo?: null | number;
  idOperador?: null | number;
  idSupervisor?: null | number;
  skip?: number;
  statusAlerta?: StatusOcorrenciaHttp;
  tipoAlerta?: TipoOcorrenciaHttp;
  top?: number;
}
