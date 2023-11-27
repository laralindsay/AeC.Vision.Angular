/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ParametrizacaoViewModelHttp } from '../../models/parametrizacao-view-model-http';
import { SistemaViewModelHttp } from '../../models/sistema-view-model-http';

export interface ApiParametrizacaoPost$Json$Params {
      body?: ParametrizacaoViewModelHttp
}

export function apiParametrizacaoPost$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SistemaViewModelHttp>;
    })
  );
}

apiParametrizacaoPost$Json.PATH = '/api/Parametrizacao';
