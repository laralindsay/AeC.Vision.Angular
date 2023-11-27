/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { NivelLogViewModelHttp } from '../../models/nivel-log-view-model-http';

export interface ApiParametrizacaoNivelLogGet$Plain$Params {
}

export function apiParametrizacaoNivelLogGet$Plain(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoNivelLogGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NivelLogViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoNivelLogGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NivelLogViewModelHttp>>;
    })
  );
}

apiParametrizacaoNivelLogGet$Plain.PATH = '/api/Parametrizacao/nivelLog';
