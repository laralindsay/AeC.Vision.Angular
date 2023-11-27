/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ClienteViewModelHttp } from '../../models/cliente-view-model-http';

export interface ApiClientePost$Plain$Params {
      body?: ClienteViewModelHttp
}

export function apiClientePost$Plain(http: HttpClient, rootUrl: string, params?: ApiClientePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiClientePost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ClienteViewModelHttp>;
    })
  );
}

apiClientePost$Plain.PATH = '/api/Cliente';
