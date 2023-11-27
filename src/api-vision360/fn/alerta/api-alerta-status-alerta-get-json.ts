/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { StatusAlertaViewModelHttp } from '../../models/status-alerta-view-model-http';

export interface ApiAlertaStatusAlertaGet$Json$Params {
}

export function apiAlertaStatusAlertaGet$Json(http: HttpClient, rootUrl: string, params?: ApiAlertaStatusAlertaGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StatusAlertaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaStatusAlertaGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StatusAlertaViewModelHttp>>;
    })
  );
}

apiAlertaStatusAlertaGet$Json.PATH = '/api/Alerta/StatusAlerta';
