/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ProjetoViewModelHttp } from '../../models/projeto-view-model-http';

export interface ApiProjetoIdDelete$Plain$Params {
  id: number;
}

export function apiProjetoIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiProjetoIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiProjetoIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjetoViewModelHttp>;
    })
  );
}

apiProjetoIdDelete$Plain.PATH = '/api/Projeto/{id}';
