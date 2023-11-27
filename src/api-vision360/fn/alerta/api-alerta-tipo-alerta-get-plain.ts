/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoAlertaViewModelHttp } from '../../models/tipo-alerta-view-model-http';

export interface ApiAlertaTipoAlertaGet$Plain$Params {
}

export function apiAlertaTipoAlertaGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAlertaTipoAlertaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoAlertaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaTipoAlertaGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoAlertaViewModelHttp>>;
    })
  );
}

apiAlertaTipoAlertaGet$Plain.PATH = '/api/Alerta/TipoAlerta';
