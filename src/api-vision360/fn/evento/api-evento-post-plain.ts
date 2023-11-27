/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { EventoRequestViewModelHttp } from '../../models/evento-request-view-model-http';
import { PacoteEventoViewModelHttp } from '../../models/pacote-evento-view-model-http';

export interface ApiEventoPost$Plain$Params {
      body?: EventoRequestViewModelHttp
}

export function apiEventoPost$Plain(http: HttpClient, rootUrl: string, params?: ApiEventoPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteEventoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiEventoPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteEventoViewModelHttp>;
    })
  );
}

apiEventoPost$Plain.PATH = '/api/Evento';
