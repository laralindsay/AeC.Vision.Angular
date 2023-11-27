/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { Vision360ApiRequestBuilder } from '../../vision-360-api-request-builder';


export interface ApiOperadorIdChamadasPdfGet$Params {
  id?: number;
}

export function apiOperadorIdChamadasPdfGet(http: HttpClient, rootUrl: string, params?: ApiOperadorIdChamadasPdfGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new Vision360ApiRequestBuilder(rootUrl, apiOperadorIdChamadasPdfGet.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
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

apiOperadorIdChamadasPdfGet.PATH = '/api/Operador/id/chamadas/pdf';
