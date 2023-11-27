/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { PerfilViewModelHttp } from '../../models/perfil-view-model-http';

export interface ApiPerfilGet$Json$Params {
}

export function apiPerfilGet$Json(http: HttpClient, rootUrl: string, params?: ApiPerfilGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PerfilViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiPerfilGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PerfilViewModelHttp>>;
    })
  );
}

apiPerfilGet$Json.PATH = '/api/Perfil';
