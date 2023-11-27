/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { PacoteHierarquiaViewModelHttp } from '../../models/pacote-hierarquia-view-model-http';

export interface ApiAdministradorHierarquiaPost$Json$Params {
      body?: DashboardCriteriaHttp
}

export function apiAdministradorHierarquiaPost$Json(http: HttpClient, rootUrl: string, params?: ApiAdministradorHierarquiaPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAdministradorHierarquiaPost$Json.PATH, 'post');
  if (params) {
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

apiAdministradorHierarquiaPost$Json.PATH = '/api/Administrador/hierarquia';
