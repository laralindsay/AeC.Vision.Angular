/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { VersaoViewModelHttp } from '../../models/versao-view-model-http';

export interface ApiParametrizacaoVersaoGet$Plain$Params {
}

export function apiParametrizacaoVersaoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoVersaoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VersaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoVersaoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<VersaoViewModelHttp>>;
    })
  );
}

apiParametrizacaoVersaoGet$Plain.PATH = '/api/Parametrizacao/Versao';
