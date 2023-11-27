/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ScreenshotViewModelHttp } from '../../models/screenshot-view-model-http';

export interface ApiAlertaScreenshotGet$Json$Params {
  idRegistro?: number;
  idTipoOcorrencia?: number;
}

export function apiAlertaScreenshotGet$Json(http: HttpClient, rootUrl: string, params?: ApiAlertaScreenshotGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ScreenshotViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaScreenshotGet$Json.PATH, 'get');
  if (params) {
    rb.query('idRegistro', params.idRegistro, {});
    rb.query('idTipoOcorrencia', params.idTipoOcorrencia, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ScreenshotViewModelHttp>;
    })
  );
}

apiAlertaScreenshotGet$Json.PATH = '/api/Alerta/Screenshot';
