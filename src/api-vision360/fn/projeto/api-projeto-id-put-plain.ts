/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ProjetoViewModelHttp } from '../../models/projeto-view-model-http';

export interface ApiProjetoIdPut$Plain$Params {
  id: number;
      body?: ProjetoViewModelHttp
}

export function apiProjetoIdPut$Plain(http: HttpClient, rootUrl: string, params: ApiProjetoIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiProjetoIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjetoViewModelHttp>;
    })
  );
}

apiProjetoIdPut$Plain.PATH = '/api/Projeto/{id}';
