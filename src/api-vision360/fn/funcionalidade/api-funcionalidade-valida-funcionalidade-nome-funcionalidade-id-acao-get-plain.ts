/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionalidadeViewModelHttp } from '../../models/funcionalidade-view-model-http';

export interface ApiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain$Params {
  nomeFuncionalidade: string;
  idAcao: number;
}

export function apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain(http: HttpClient, rootUrl: string, params: ApiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain.PATH, 'get');
  if (params) {
    rb.path('nomeFuncionalidade', params.nomeFuncionalidade, {});
    rb.path('idAcao', params.idAcao, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
    })
  );
}

apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain.PATH = '/api/Funcionalidade/ValidaFuncionalidade/{nomeFuncionalidade}/{idAcao}';
