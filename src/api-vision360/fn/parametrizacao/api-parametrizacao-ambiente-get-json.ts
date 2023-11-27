/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AmbienteViewModelHttp } from '../../models/ambiente-view-model-http';

export interface ApiParametrizacaoAmbienteGet$Json$Params {
}

export function apiParametrizacaoAmbienteGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoAmbienteGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AmbienteViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoAmbienteGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AmbienteViewModelHttp>>;
    })
  );
}

apiParametrizacaoAmbienteGet$Json.PATH = '/api/Parametrizacao/Ambiente';
