/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { OfensorModelHttp } from '../../models/ofensor-model-http';

export interface ApiGerenteExecutivoIdOfensoresAusenciaInaderentePost$Plain$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiGerenteExecutivoIdOfensoresAusenciaInaderentePost$Plain(http: HttpClient, rootUrl: string, params: ApiGerenteExecutivoIdOfensoresAusenciaInaderentePost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiGerenteExecutivoIdOfensoresAusenciaInaderentePost$Plain.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OfensorModelHttp>>;
    })
  );
}

apiGerenteExecutivoIdOfensoresAusenciaInaderentePost$Plain.PATH = '/api/GerenteExecutivo/{id}/ofensores/ausencia-inaderente';
