/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoParametrizacaoViewModelHttp } from '../../models/tipo-parametrizacao-view-model-http';

export interface ApiParametrizacaoTipoGet$Plain$Params {
}

export function apiParametrizacaoTipoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoTipoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoTipoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>;
    })
  );
}

apiParametrizacaoTipoGet$Plain.PATH = '/api/Parametrizacao/tipo';
