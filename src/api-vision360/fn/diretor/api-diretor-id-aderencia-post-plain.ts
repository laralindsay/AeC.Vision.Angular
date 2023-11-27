/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { IndicadorAderenciaViewModelHttp } from '../../models/indicador-aderencia-view-model-http';

export interface ApiDiretorIdAderenciaPost$Plain$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiDiretorIdAderenciaPost$Plain(http: HttpClient, rootUrl: string, params: ApiDiretorIdAderenciaPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiDiretorIdAderenciaPost$Plain.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<IndicadorAderenciaViewModelHttp>;
    })
  );
}

apiDiretorIdAderenciaPost$Plain.PATH = '/api/Diretor/{id}/aderencia';
