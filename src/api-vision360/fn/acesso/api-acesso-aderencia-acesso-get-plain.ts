/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AderenciaAcessoViewModelHttp } from '../../models/aderencia-acesso-view-model-http';

export interface ApiAcessoAderenciaAcessoGet$Plain$Params {
}

export function apiAcessoAderenciaAcessoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAcessoAderenciaAcessoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAcessoAderenciaAcessoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>;
    })
  );
}

apiAcessoAderenciaAcessoGet$Plain.PATH = '/api/Acesso/AderenciaAcesso';
