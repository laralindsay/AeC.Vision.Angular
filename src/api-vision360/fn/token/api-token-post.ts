/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { AccessCredentialsHttp } from '../../models/access-credentials-http';

export interface ApiTokenPost$Params {
      body?: AccessCredentialsHttp
}

export function apiTokenPost(http: HttpClient, rootUrl: string, params?: ApiTokenPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiTokenPost.PATH, 'post');
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

apiTokenPost.PATH = '/api/Token';
