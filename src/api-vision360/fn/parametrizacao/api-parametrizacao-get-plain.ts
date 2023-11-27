/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ParametrizacoesViewModelHttp } from '../../models/parametrizacoes-view-model-http';

export interface ApiParametrizacaoGet$Plain$Params {
  numeroPagina?: number;
  tamanhoPagina?: number;
}

export function apiParametrizacaoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ParametrizacoesViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoGet$Plain.PATH, 'get');
  if (params) {
    rb.header('numeroPagina', params.numeroPagina, {});
    rb.header('tamanhoPagina', params.tamanhoPagina, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ParametrizacoesViewModelHttp>;
    })
  );
}

apiParametrizacaoGet$Plain.PATH = '/api/Parametrizacao';
