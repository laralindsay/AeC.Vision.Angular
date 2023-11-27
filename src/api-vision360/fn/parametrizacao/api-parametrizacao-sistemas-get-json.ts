/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { GrupoParametroSistemaViewModelHttp } from '../../models/grupo-parametro-sistema-view-model-http';

export interface ApiParametrizacaoSistemasGet$Json$Params {
}

export function apiParametrizacaoSistemasGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoSistemasGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoSistemasGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>;
    })
  );
}

apiParametrizacaoSistemasGet$Json.PATH = '/api/Parametrizacao/sistemas';
