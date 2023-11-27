/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { ClienteViewModelHttp } from '../../models/cliente-view-model-http';

export interface ApiClienteGet$Json$Params {
}

export function apiClienteGet$Json(http: HttpClient, rootUrl: string, params?: ApiClienteGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ClienteViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiClienteGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ClienteViewModelHttp>>;
    })
  );
}

apiClienteGet$Json.PATH = '/api/Cliente';
