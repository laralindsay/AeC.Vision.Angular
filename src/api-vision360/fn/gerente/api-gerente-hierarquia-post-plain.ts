/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';

import { HierarquiaCriteriaHttp } from '../../models/hierarquia-criteria-http';
import { PacoteHierarquiaViewModelHttp } from '../../models/pacote-hierarquia-view-model-http';

export interface ApiGerenteHierarquiaPost$Plain$Params {
      body?: HierarquiaCriteriaHttp
}

export function apiGerenteHierarquiaPost$Plain(http: HttpClient, rootUrl: string, params?: ApiGerenteHierarquiaPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiGerenteHierarquiaPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
    })
  );
}

apiGerenteHierarquiaPost$Plain.PATH = '/api/Gerente/hierarquia';
