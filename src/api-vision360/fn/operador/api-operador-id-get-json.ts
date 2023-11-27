/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { OperadorDetalhadoModelHttp } from '../../models/operador-detalhado-model-http';

export interface ApiOperadorIdGet$Json$Params {
  id?: number;
}

export function apiOperadorIdGet$Json(http: HttpClient, rootUrl: string, params?: ApiOperadorIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<OperadorDetalhadoModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiOperadorIdGet$Json.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OperadorDetalhadoModelHttp>;
    })
  );
}

apiOperadorIdGet$Json.PATH = '/api/Operador/id';
