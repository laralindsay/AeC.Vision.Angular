/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { StatusAlertaViewModelHttp } from '../../models/status-alerta-view-model-http';

export interface ApiAlertaStatusAlertaGet$Plain$Params {
}

export function apiAlertaStatusAlertaGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAlertaStatusAlertaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StatusAlertaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaStatusAlertaGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StatusAlertaViewModelHttp>>;
    })
  );
}

apiAlertaStatusAlertaGet$Plain.PATH = '/api/Alerta/StatusAlerta';
