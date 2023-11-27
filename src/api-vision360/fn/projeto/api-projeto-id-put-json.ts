/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ProjetoViewModelHttp } from '../../models/projeto-view-model-http';

export interface ApiProjetoIdPut$Json$Params {
  id: number;
      body?: ProjetoViewModelHttp
}

export function apiProjetoIdPut$Json(http: HttpClient, rootUrl: string, params: ApiProjetoIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiProjetoIdPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjetoViewModelHttp>;
    })
  );
}

apiProjetoIdPut$Json.PATH = '/api/Projeto/{id}';
