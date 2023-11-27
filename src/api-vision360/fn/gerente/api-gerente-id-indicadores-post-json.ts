/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { IndicadorViewModelHttp } from '../../models/indicador-view-model-http';

export interface ApiGerenteIdIndicadoresPost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiGerenteIdIndicadoresPost$Json(http: HttpClient, rootUrl: string, params: ApiGerenteIdIndicadoresPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiGerenteIdIndicadoresPost$Json.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<IndicadorViewModelHttp>>;
    })
  );
}

apiGerenteIdIndicadoresPost$Json.PATH = '/api/Gerente/{id}/indicadores';