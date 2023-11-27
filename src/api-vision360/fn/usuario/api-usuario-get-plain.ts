/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AdministradorViewModelHttp } from '../../models/administrador-view-model-http';

export interface ApiUsuarioGet$Plain$Params {
}

export function apiUsuarioGet$Plain(http: HttpClient, rootUrl: string, params?: ApiUsuarioGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AdministradorViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiUsuarioGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AdministradorViewModelHttp>>;
    })
  );
}

apiUsuarioGet$Plain.PATH = '/api/Usuario';
