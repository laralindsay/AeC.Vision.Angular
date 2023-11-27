/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { NivelLogViewModelHttp } from '../../models/nivel-log-view-model-http';

export interface ApiParametrizacaoNivelLogGet$Json$Params {
}

export function apiParametrizacaoNivelLogGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoNivelLogGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<NivelLogViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoNivelLogGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<NivelLogViewModelHttp>>;
    })
  );
}

apiParametrizacaoNivelLogGet$Json.PATH = '/api/Parametrizacao/nivelLog';
