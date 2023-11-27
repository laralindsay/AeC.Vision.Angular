/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AcessoRequestViewModelHttp } from '../../models/acesso-request-view-model-http';
import { PacoteAcessoViewModelHttp } from '../../models/pacote-acesso-view-model-http';

export interface ApiAcessoPost$Plain$Params {
      body?: AcessoRequestViewModelHttp
}

export function apiAcessoPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAcessoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteAcessoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAcessoPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteAcessoViewModelHttp>;
    })
  );
}

apiAcessoPost$Plain.PATH = '/api/Acesso';
