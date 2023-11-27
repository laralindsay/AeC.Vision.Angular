/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { OfensorModelHttp } from '../../models/ofensor-model-http';

export interface ApiDiretorIdOfensoresSilencioAderentePost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiDiretorIdOfensoresSilencioAderentePost$Json(http: HttpClient, rootUrl: string, params: ApiDiretorIdOfensoresSilencioAderentePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiDiretorIdOfensoresSilencioAderentePost$Json.PATH, 'post');
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

apiDiretorIdOfensoresSilencioAderentePost$Json.PATH = '/api/Diretor/{id}/ofensores/silencio-aderente';
