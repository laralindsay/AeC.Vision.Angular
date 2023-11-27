/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionalidadeViewModelHttp } from '../../models/funcionalidade-view-model-http';

export interface ApiFuncionalidadeIdPut$Json$Params {
  id: number;
      body?: FuncionalidadeViewModelHttp
}

export function apiFuncionalidadeIdPut$Json(http: HttpClient, rootUrl: string, params: ApiFuncionalidadeIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiFuncionalidadeIdPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
    })
  );
}

apiFuncionalidadeIdPut$Json.PATH = '/api/Funcionalidade/{id}';
