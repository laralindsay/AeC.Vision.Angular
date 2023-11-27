/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoSistemaViewModelHttp } from '../../models/tipo-sistema-view-model-http';

export interface ApiSistemaTipoGet$Json$Params {
}

export function apiSistemaTipoGet$Json(http: HttpClient, rootUrl: string, params?: ApiSistemaTipoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoSistemaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSistemaTipoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoSistemaViewModelHttp>>;
    })
  );
}

apiSistemaTipoGet$Json.PATH = '/api/Sistema/tipo';
