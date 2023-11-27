/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { PerfilViewModelHttp } from '../../models/perfil-view-model-http';

export interface ApiPerfilIdPut$Plain$Params {
  id: number;
      body?: PerfilViewModelHttp
}

export function apiPerfilIdPut$Plain(http: HttpClient, rootUrl: string, params: ApiPerfilIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiPerfilIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PerfilViewModelHttp>;
    })
  );
}

apiPerfilIdPut$Plain.PATH = '/api/Perfil/{id}';
