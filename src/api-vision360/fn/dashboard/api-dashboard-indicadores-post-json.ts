/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { IndicadorModelHttp } from '../../models/indicador-model-http';

export interface ApiDashboardIndicadoresPost$Json$Params {
      body?: DashboardCriteriaHttp
}

export function apiDashboardIndicadoresPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardIndicadoresPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IndicadorModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiDashboardIndicadoresPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<IndicadorModelHttp>>;
    })
  );
}

apiDashboardIndicadoresPost$Json.PATH = '/api/Dashboard/indicadores';
