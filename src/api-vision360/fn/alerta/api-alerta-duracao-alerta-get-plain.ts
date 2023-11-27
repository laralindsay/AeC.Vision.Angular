/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DuracaoAlertaViewModelHttp } from '../../models/duracao-alerta-view-model-http';

export interface ApiAlertaDuracaoAlertaGet$Plain$Params {
}

export function apiAlertaDuracaoAlertaGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAlertaDuracaoAlertaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaDuracaoAlertaGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>;
    })
  );
}

apiAlertaDuracaoAlertaGet$Plain.PATH = '/api/Alerta/DuracaoAlerta';
