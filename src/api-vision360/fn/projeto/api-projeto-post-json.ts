/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ProjetoViewModelHttp } from '../../models/projeto-view-model-http';

export interface ApiProjetoPost$Json$Params {
      body?: ProjetoViewModelHttp
}

export function apiProjetoPost$Json(http: HttpClient, rootUrl: string, params?: ApiProjetoPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiProjetoPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjetoViewModelHttp>;
    })
  );
}

apiProjetoPost$Json.PATH = '/api/Projeto';
