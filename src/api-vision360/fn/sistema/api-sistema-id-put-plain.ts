/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SistemaViewModelHttp } from '../../models/sistema-view-model-http';

export interface ApiSistemaIdPut$Plain$Params {
  id: number;
      body?: SistemaViewModelHttp
}

export function apiSistemaIdPut$Plain(http: HttpClient, rootUrl: string, params: ApiSistemaIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSistemaIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SistemaViewModelHttp>;
    })
  );
}

apiSistemaIdPut$Plain.PATH = '/api/Sistema/{id}';
