/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SegmentoViewModelHttp } from '../../models/segmento-view-model-http';

export interface ApiDashboardSegmentoGet$Json$Params {
  idOperacao?: number;
}

export function apiDashboardSegmentoGet$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardSegmentoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiDashboardSegmentoGet$Json.PATH, 'get');
  if (params) {
    rb.query('idOperacao', params.idOperacao, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SegmentoViewModelHttp>>;
    })
  );
}

apiDashboardSegmentoGet$Json.PATH = '/api/Dashboard/segmento';
