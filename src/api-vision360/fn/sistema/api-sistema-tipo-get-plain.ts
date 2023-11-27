/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoSistemaViewModelHttp } from '../../models/tipo-sistema-view-model-http';

export interface ApiSistemaTipoGet$Plain$Params {
}

export function apiSistemaTipoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiSistemaTipoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoSistemaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSistemaTipoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoSistemaViewModelHttp>>;
    })
  );
}

apiSistemaTipoGet$Plain.PATH = '/api/Sistema/tipo';
