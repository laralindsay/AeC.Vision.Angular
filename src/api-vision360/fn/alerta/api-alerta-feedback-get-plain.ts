/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FeedbackViewmodelHttp } from '../../models/feedback-viewmodel-http';

export interface ApiAlertaFeedbackGet$Plain$Params {
  id?: number;
}

export function apiAlertaFeedbackGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAlertaFeedbackGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FeedbackViewmodelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaFeedbackGet$Plain.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FeedbackViewmodelHttp>;
    })
  );
}

apiAlertaFeedbackGet$Plain.PATH = '/api/Alerta/Feedback';
