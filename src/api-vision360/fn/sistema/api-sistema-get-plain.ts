/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SistemasViewModelHttp } from '../../models/sistemas-view-model-http';

export interface ApiSistemaGet$Plain$Params {
  numeroPagina?: number;
  tamanhoPagina?: number;
}

export function apiSistemaGet$Plain(http: HttpClient, rootUrl: string, params?: ApiSistemaGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<SistemasViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSistemaGet$Plain.PATH, 'get');
  if (params) {
    rb.header('numeroPagina', params.numeroPagina, {});
    rb.header('tamanhoPagina', params.tamanhoPagina, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SistemasViewModelHttp>;
    })
  );
}

apiSistemaGet$Plain.PATH = '/api/Sistema';
