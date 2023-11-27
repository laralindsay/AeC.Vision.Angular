/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SegmentoViewModelHttp } from '../../models/segmento-view-model-http';

export interface ApiAdministradorSegmentoGet$Plain$Params {
  idOperacao?: number;
}

export function apiAdministradorSegmentoGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAdministradorSegmentoGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAdministradorSegmentoGet$Plain.PATH, 'get');
  if (params) {
    rb.query('idOperacao', params.idOperacao, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SegmentoViewModelHttp>>;
    })
  );
}

apiAdministradorSegmentoGet$Plain.PATH = '/api/Administrador/segmento';
