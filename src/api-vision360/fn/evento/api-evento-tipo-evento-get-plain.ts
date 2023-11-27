/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { TipoEventoViewModelHttp } from '../../models/tipo-evento-view-model-http';

export interface ApiEventoTipoEventoGet$Plain$Params {
}

export function apiEventoTipoEventoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiEventoTipoEventoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TipoEventoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiEventoTipoEventoGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TipoEventoViewModelHttp>>;
    })
  );
}

apiEventoTipoEventoGet$Plain.PATH = '/api/Evento/tipoEvento';
