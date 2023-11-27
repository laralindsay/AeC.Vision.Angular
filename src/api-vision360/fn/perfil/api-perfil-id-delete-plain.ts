/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { PerfilViewModelHttp } from '../../models/perfil-view-model-http';

export interface ApiPerfilIdDelete$Plain$Params {
  id: number;
}

export function apiPerfilIdDelete$Plain(http: HttpClient, rootUrl: string, params: ApiPerfilIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiPerfilIdDelete$Plain.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PerfilViewModelHttp>;
    })
  );
}

apiPerfilIdDelete$Plain.PATH = '/api/Perfil/{id}';
