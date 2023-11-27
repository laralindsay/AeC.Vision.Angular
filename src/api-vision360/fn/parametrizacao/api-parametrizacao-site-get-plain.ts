/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SiteViewModelHttp } from '../../models/site-view-model-http';

export interface ApiParametrizacaoSiteGet$Plain$Params {
}

export function apiParametrizacaoSiteGet$Plain(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoSiteGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SiteViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoSiteGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SiteViewModelHttp>>;
    })
  );
}

apiParametrizacaoSiteGet$Plain.PATH = '/api/Parametrizacao/Site';
