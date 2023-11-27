/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Vision360ApiBaseService } from '../vision-360-api-base-service';
import { Vision360ApiConfiguration } from '../vision-360-api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Vision360ApiRequestBuilder } from '../vision-360-api-request-builder';

import { ChamadaIndicadorModelHttp } from '../models/chamada-indicador-model-http';

@Injectable({ providedIn: 'root' })
export class HttpChamadaService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiChamadaIdIndicadoresGet()` */
  static readonly ApiChamadaIdIndicadoresGetPath = '/api/Chamada/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChamadaIdIndicadoresGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChamadaIdIndicadoresGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ChamadaIndicadorModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpChamadaService.ApiChamadaIdIndicadoresGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChamadaIndicadorModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChamadaIdIndicadoresGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChamadaIdIndicadoresGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ChamadaIndicadorModelHttp> {
    return this.apiChamadaIdIndicadoresGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChamadaIndicadorModelHttp>): ChamadaIndicadorModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChamadaIdIndicadoresGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChamadaIdIndicadoresGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ChamadaIndicadorModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpChamadaService.ApiChamadaIdIndicadoresGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ChamadaIndicadorModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChamadaIdIndicadoresGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChamadaIdIndicadoresGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ChamadaIndicadorModelHttp> {
    return this.apiChamadaIdIndicadoresGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ChamadaIndicadorModelHttp>): ChamadaIndicadorModelHttp => r.body)
    );
  }

}
