/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionarioHttp } from '../../models/funcionario-http';
import { TipoPerfilHttp } from '../../models/tipo-perfil-http';

export interface ApiAlertaSubordinadoGet$Json$Params {
  id?: number;
  perfil?: TipoPerfilHttp;
}

export function apiAlertaSubordinadoGet$Json(http: HttpClient, rootUrl: string, params?: ApiAlertaSubordinadoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FuncionarioHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaSubordinadoGet$Json.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('perfil', params.perfil, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FuncionarioHttp>>;
    })
  );
}

apiAlertaSubordinadoGet$Json.PATH = '/api/Alerta/Subordinado';
