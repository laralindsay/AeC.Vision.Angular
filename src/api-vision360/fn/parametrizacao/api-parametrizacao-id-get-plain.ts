/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ParametrizacaoViewModelHttp } from '../../models/parametrizacao-view-model-http';

export interface ApiParametrizacaoIdGet$Plain$Params {
  id: number;
}

export function apiParametrizacaoIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiParametrizacaoIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
    })
  );
}

apiParametrizacaoIdGet$Plain.PATH = '/api/Parametrizacao/{id}';
