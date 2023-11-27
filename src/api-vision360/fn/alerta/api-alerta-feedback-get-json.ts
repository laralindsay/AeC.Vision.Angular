/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { FeedbackViewmodelHttp } from '../../models/feedback-viewmodel-http';

export interface ApiAlertaFeedbackGet$Json$Params {
  id?: number;
}

export function apiAlertaFeedbackGet$Json(http: HttpClient, rootUrl: string, params?: ApiAlertaFeedbackGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FeedbackViewmodelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiAlertaFeedbackGet$Json.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FeedbackViewmodelHttp>;
    })
  );
}

apiAlertaFeedbackGet$Json.PATH = '/api/Alerta/Feedback';
