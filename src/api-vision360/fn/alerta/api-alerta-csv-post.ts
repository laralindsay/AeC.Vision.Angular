/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AlertaRequestViewModelHttp } from '../../models/alerta-request-view-model-http';

export interface ApiAlertaCsvPost$Params {
      body?: AlertaRequestViewModelHttp
}

export function apiAlertaCsvPost(http: HttpClient, rootUrl: string, params?: ApiAlertaCsvPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaCsvPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiAlertaCsvPost.PATH = '/api/Alerta/csv';
