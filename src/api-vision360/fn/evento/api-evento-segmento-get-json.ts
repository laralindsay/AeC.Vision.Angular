/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SegmentoViewModelHttp } from '../../models/segmento-view-model-http';
import { TipoPerfilHttp } from '../../models/tipo-perfil-http';

export interface ApiEventoSegmentoGet$Json$Params {
  idOperacao?: number;
  matricula?: string;
  perfil?: TipoPerfilHttp;
}

export function apiEventoSegmentoGet$Json(http: HttpClient, rootUrl: string, params?: ApiEventoSegmentoGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiEventoSegmentoGet$Json.PATH, 'get');
  if (params) {
    rb.query('idOperacao', params.idOperacao, {});
    rb.query('matricula', params.matricula, {});
    rb.query('perfil', params.perfil, {});
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

apiEventoSegmentoGet$Json.PATH = '/api/Evento/segmento';
