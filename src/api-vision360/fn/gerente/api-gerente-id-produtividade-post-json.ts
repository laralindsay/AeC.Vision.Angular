/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { DashboardCriteriaHttp } from '../../models/dashboard-criteria-http';
import { PacoteProdutividadeModelHttp } from '../../models/pacote-produtividade-model-http';

export interface ApiGerenteIdProdutividadePost$Json$Params {
  id: number;
      body?: DashboardCriteriaHttp
}

export function apiGerenteIdProdutividadePost$Json(http: HttpClient, rootUrl: string, params: ApiGerenteIdProdutividadePost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiGerenteIdProdutividadePost$Json.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteProdutividadeModelHttp>;
    })
  );
}

apiGerenteIdProdutividadePost$Json.PATH = '/api/Gerente/{id}/produtividade';
