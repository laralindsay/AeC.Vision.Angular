/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { SistemaModelHttp } from '../../models/sistema-model-http';

export interface ApiSupervisorIdSistemasWebInaderentePost$Plain$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiSupervisorIdSistemasWebInaderentePost$Plain(http: HttpClient, rootUrl: string, params: ApiSupervisorIdSistemasWebInaderentePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSupervisorIdSistemasWebInaderentePost$Plain.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SistemaModelHttp>>;
    })
  );
}

apiSupervisorIdSistemasWebInaderentePost$Plain.PATH = '/api/Supervisor/{id}/sistemas/web-inaderente';
