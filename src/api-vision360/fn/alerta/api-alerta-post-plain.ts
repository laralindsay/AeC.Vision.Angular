/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AlertaRequestViewModelHttp } from '../../models/alerta-request-view-model-http';
import { PacoteAlertaViewModelHttp } from '../../models/pacote-alerta-view-model-http';

export interface ApiAlertaPost$Plain$Params {
      body?: AlertaRequestViewModelHttp
}

export function apiAlertaPost$Plain(http: HttpClient, rootUrl: string, params?: ApiAlertaPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteAlertaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteAlertaViewModelHttp>;
    })
  );
}

apiAlertaPost$Plain.PATH = '/api/Alerta';
