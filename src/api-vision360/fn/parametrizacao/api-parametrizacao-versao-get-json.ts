/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { VersaoViewModelHttp } from '../../models/versao-view-model-http';

export interface ApiParametrizacaoVersaoGet$Json$Params {
}

export function apiParametrizacaoVersaoGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoVersaoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<VersaoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoVersaoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<VersaoViewModelHttp>>;
    })
  );
}

apiParametrizacaoVersaoGet$Json.PATH = '/api/Parametrizacao/Versao';
