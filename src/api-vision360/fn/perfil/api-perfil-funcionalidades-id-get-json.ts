/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionalidadeViewModelHttp } from '../../models/funcionalidade-view-model-http';

export interface ApiPerfilFuncionalidadesIdGet$Json$Params {
  id: number;
}

export function apiPerfilFuncionalidadesIdGet$Json(http: HttpClient, rootUrl: string, params: ApiPerfilFuncionalidadesIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiPerfilFuncionalidadesIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>;
    })
  );
}

apiPerfilFuncionalidadesIdGet$Json.PATH = '/api/Perfil/Funcionalidades{id}';
