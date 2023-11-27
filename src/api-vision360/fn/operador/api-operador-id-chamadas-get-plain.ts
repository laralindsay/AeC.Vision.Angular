/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { LigacaoModelHttp } from '../../models/ligacao-model-http';

export interface ApiOperadorIdChamadasGet$Plain$Params {
  id?: number;
}

export function apiOperadorIdChamadasGet$Plain(http: HttpClient, rootUrl: string, params?: ApiOperadorIdChamadasGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<LigacaoModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiOperadorIdChamadasGet$Plain.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<LigacaoModelHttp>>;
    })
  );
}

apiOperadorIdChamadasGet$Plain.PATH = '/api/Operador/id/chamadas';
