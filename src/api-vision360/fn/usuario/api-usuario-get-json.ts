/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AdministradorViewModelHttp } from '../../models/administrador-view-model-http';

export interface ApiUsuarioGet$Json$Params {
}

export function apiUsuarioGet$Json(http: HttpClient, rootUrl: string, params?: ApiUsuarioGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AdministradorViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiUsuarioGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AdministradorViewModelHttp>>;
    })
  );
}

apiUsuarioGet$Json.PATH = '/api/Usuario';
