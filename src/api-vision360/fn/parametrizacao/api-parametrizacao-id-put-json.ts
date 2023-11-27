/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ParametrizacaoViewModelHttp } from '../../models/parametrizacao-view-model-http';
import { UsuarioViewModelHttp } from '../../models/usuario-view-model-http';

export interface ApiParametrizacaoIdPut$Json$Params {
  id: number;
      body?: ParametrizacaoViewModelHttp
}

export function apiParametrizacaoIdPut$Json(http: HttpClient, rootUrl: string, params: ApiParametrizacaoIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoIdPut$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

apiParametrizacaoIdPut$Json.PATH = '/api/Parametrizacao/{id}';
