/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { OfensorModelHttp } from '../../models/ofensor-model-http';

export interface ApiSupervisorIdOfensoresSilencioAderentePost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiSupervisorIdOfensoresSilencioAderentePost$Json(http: HttpClient, rootUrl: string, params: ApiSupervisorIdOfensoresSilencioAderentePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSupervisorIdOfensoresSilencioAderentePost$Json.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OfensorModelHttp>>;
    })
  );
}

apiSupervisorIdOfensoresSilencioAderentePost$Json.PATH = '/api/Supervisor/{id}/ofensores/silencio-aderente';
