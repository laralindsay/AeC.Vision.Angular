/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionalidadeViewModelHttp } from '../../models/funcionalidade-view-model-http';

export interface ApiFuncionalidadePost$Plain$Params {
      body?: FuncionalidadeViewModelHttp
}

export function apiFuncionalidadePost$Plain(http: HttpClient, rootUrl: string, params?: ApiFuncionalidadePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiFuncionalidadePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
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

apiFuncionalidadePost$Plain.PATH = '/api/Funcionalidade';
