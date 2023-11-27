/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoAcessoViewModelHttp } from '../../models/tipo-acesso-view-model-http';

export interface ApiAcessoTipoAcessoGet$Plain$Params {
}

export function apiAcessoTipoAcessoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAcessoTipoAcessoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoAcessoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAcessoTipoAcessoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoAcessoViewModelHttp>>;
    })
  );
}

apiAcessoTipoAcessoGet$Plain.PATH = '/api/Acesso/TipoAcesso';
