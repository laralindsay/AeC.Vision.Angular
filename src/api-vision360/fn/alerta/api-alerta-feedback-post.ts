/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FeedbackViewmodelHttp } from '../../models/feedback-viewmodel-http';

export interface ApiAlertaFeedbackPost$Params {
      body?: FeedbackViewmodelHttp
}

export function apiAlertaFeedbackPost(http: HttpClient, rootUrl: string, params?: ApiAlertaFeedbackPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaFeedbackPost.PATH, 'post');
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

apiAlertaFeedbackPost.PATH = '/api/Alerta/Feedback';
