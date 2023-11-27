/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SistemaViewModelHttp } from '../../models/sistema-view-model-http';

export interface ApiSistemaIdDelete$Json$Params {
  id: number;
}

export function apiSistemaIdDelete$Json(http: HttpClient, rootUrl: string, params: ApiSistemaIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiSistemaIdDelete$Json.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<SistemaViewModelHttp>;
    })
  );
}

apiSistemaIdDelete$Json.PATH = '/api/Sistema/{id}';
