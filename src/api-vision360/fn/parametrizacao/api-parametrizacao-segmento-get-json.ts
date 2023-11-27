/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SegmentoViewModelHttp } from '../../models/segmento-view-model-http';

export interface ApiParametrizacaoSegmentoGet$Json$Params {
}

export function apiParametrizacaoSegmentoGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoSegmentoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoSegmentoGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SegmentoViewModelHttp>>;
    })
  );
}

apiParametrizacaoSegmentoGet$Json.PATH = '/api/Parametrizacao/segmento';
