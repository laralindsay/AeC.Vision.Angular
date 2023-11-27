/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoParametrizacaoViewModelHttp } from '../../models/tipo-parametrizacao-view-model-http';

export interface ApiParametrizacaoTipoGet$Json$Params {
}

export function apiParametrizacaoTipoGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoTipoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoTipoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>;
    })
  );
}

apiParametrizacaoTipoGet$Json.PATH = '/api/Parametrizacao/tipo';
