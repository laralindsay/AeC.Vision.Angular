/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AdministradorViewModelHttp } from '../../models/administrador-view-model-http';
import { UsuarioViewModelHttp } from '../../models/usuario-view-model-http';

export interface ApiUsuarioPost$Json$Params {
      body?: AdministradorViewModelHttp
}

export function apiUsuarioPost$Json(http: HttpClient, rootUrl: string, params?: ApiUsuarioPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiUsuarioPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsuarioViewModelHttp>;
    })
  );
}

apiUsuarioPost$Json.PATH = '/api/Usuario';
