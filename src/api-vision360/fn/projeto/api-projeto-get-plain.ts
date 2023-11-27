/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ProjetoViewModelHttp } from '../../models/projeto-view-model-http';

export interface ApiProjetoGet$Plain$Params {
}

export function apiProjetoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiProjetoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ProjetoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiProjetoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ProjetoViewModelHttp>>;
    })
  );
}

apiProjetoGet$Plain.PATH = '/api/Projeto';
