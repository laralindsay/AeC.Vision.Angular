/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { SiteViewModelHttp } from '../../models/site-view-model-http';

export interface ApiParametrizacaoSiteGet$Json$Params {
}

export function apiParametrizacaoSiteGet$Json(http: HttpClient, rootUrl: string, params?: ApiParametrizacaoSiteGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SiteViewModelHttp>>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiParametrizacaoSiteGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SiteViewModelHttp>>;
    })
  );
}

apiParametrizacaoSiteGet$Json.PATH = '/api/Parametrizacao/Site';
