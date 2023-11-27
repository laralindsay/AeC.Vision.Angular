/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { PacoteHierarquiaViewModelHttp } from '../../models/pacote-hierarquia-view-model-http';

export interface ApiSupervisorIdHierarquiaPost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiSupervisorIdHierarquiaPost$Json(http: HttpClient, rootUrl: string, params: ApiSupervisorIdHierarquiaPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSupervisorIdHierarquiaPost$Json.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
    })
  );
}

apiSupervisorIdHierarquiaPost$Json.PATH = '/api/Supervisor/{id}/hierarquia';
