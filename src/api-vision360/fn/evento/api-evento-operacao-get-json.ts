/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { OperacaoViewModelHttp } from '../../models/operacao-view-model-http';
import { TipoPerfilHttp } from '../../models/tipo-perfil-http';

export interface ApiEventoOperacaoGet$Json$Params {
  matricula?: string;
  perfil?: TipoPerfilHttp;
}

export function apiEventoOperacaoGet$Json(http: HttpClient, rootUrl: string, params?: ApiEventoOperacaoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiEventoOperacaoGet$Json.PATH, 'get');
  if (params) {
    rb.query('matricula', params.matricula, {});
    rb.query('perfil', params.perfil, {});
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

apiEventoOperacaoGet$Json.PATH = '/api/Evento/operacao';
