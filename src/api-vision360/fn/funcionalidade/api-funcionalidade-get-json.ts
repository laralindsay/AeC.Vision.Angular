/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FuncionalidadeViewModelHttp } from '../../models/funcionalidade-view-model-http';

export interface ApiFuncionalidadeGet$Json$Params {
}

export function apiFuncionalidadeGet$Json(http: HttpClient, rootUrl: string, params?: ApiFuncionalidadeGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiFuncionalidadeGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>;
    })
  );
}

apiFuncionalidadeGet$Json.PATH = '/api/Funcionalidade';
