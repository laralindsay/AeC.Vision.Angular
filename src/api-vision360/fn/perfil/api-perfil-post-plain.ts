/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { PerfilViewModelHttp } from '../../models/perfil-view-model-http';

export interface ApiPerfilPost$Plain$Params {
      body?: PerfilViewModelHttp
}

export function apiPerfilPost$Plain(http: HttpClient, rootUrl: string, params?: ApiPerfilPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiPerfilPost$Plain.PATH, 'post');
  if (params) {
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

apiPerfilPost$Plain.PATH = '/api/Perfil';
