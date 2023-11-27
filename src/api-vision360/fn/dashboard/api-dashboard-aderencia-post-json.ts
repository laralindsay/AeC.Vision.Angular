/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { IndicadorAderenciaViewModelHttp } from '../../models/indicador-aderencia-view-model-http';

export interface ApiDashboardAderenciaPost$Json$Params {
      body?: DashboardCriteriaHttp
}

export function apiDashboardAderenciaPost$Json(http: HttpClient, rootUrl: string, params?: ApiDashboardAderenciaPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiDashboardAderenciaPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IndicadorAderenciaViewModelHttp>;
    })
  );
}

apiDashboardAderenciaPost$Json.PATH = '/api/Dashboard/aderencia';
