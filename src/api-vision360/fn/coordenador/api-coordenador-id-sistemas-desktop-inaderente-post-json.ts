/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { SistemaModelHttp } from '../../models/sistema-model-http';

export interface ApiCoordenadorIdSistemasDesktopInaderentePost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiCoordenadorIdSistemasDesktopInaderentePost$Json(http: HttpClient, rootUrl: string, params: ApiCoordenadorIdSistemasDesktopInaderentePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiCoordenadorIdSistemasDesktopInaderentePost$Json.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SistemaModelHttp>>;
    })
  );
}

apiCoordenadorIdSistemasDesktopInaderentePost$Json.PATH = '/api/Coordenador/{id}/sistemas/desktop-inaderente';
