/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { OperacaoViewModelHttp } from '../../models/operacao-view-model-http';

export interface ApiAdministradorOperacaoGet$Json$Params {
}

export function apiAdministradorOperacaoGet$Json(http: HttpClient, rootUrl: string, params?: ApiAdministradorOperacaoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAdministradorOperacaoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OperacaoViewModelHttp>>;
    })
  );
}

apiAdministradorOperacaoGet$Json.PATH = '/api/Administrador/operacao';
