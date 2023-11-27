/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { UsuarioViewModelHttp } from '../../models/usuario-view-model-http';

export interface ApiUsuarioUsuarioFuncionalidadesIdGet$Plain$Params {
  id: number;
}

export function apiUsuarioUsuarioFuncionalidadesIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiUsuarioUsuarioFuncionalidadesIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiUsuarioUsuarioFuncionalidadesIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsuarioViewModelHttp>;
    })
  );
}

apiUsuarioUsuarioFuncionalidadesIdGet$Plain.PATH = '/api/Usuario/UsuarioFuncionalidades/{id}';
