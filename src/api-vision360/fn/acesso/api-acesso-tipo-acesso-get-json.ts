/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoAcessoViewModelHttp } from '../../models/tipo-acesso-view-model-http';

export interface ApiAcessoTipoAcessoGet$Json$Params {
}

export function apiAcessoTipoAcessoGet$Json(http: HttpClient, rootUrl: string, params?: ApiAcessoTipoAcessoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoAcessoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAcessoTipoAcessoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoAcessoViewModelHttp>>;
    })
  );
}

apiAcessoTipoAcessoGet$Json.PATH = '/api/Acesso/TipoAcesso';
