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

import { OperacaoViewModelHttp } from '../models/operacao-view-model-http';
import { SegmentoViewModelHttp } from '../models/segmento-view-model-http';
import { SistemaViewModelHttp } from '../models/sistema-view-model-http';
import { SistemasViewModelHttp } from '../models/sistemas-view-model-http';
import { TipoSistemaViewModelHttp } from '../models/tipo-sistema-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpSistemaService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSistemaTipoGet()` */
  static readonly ApiSistemaTipoGetPath = '/api/Sistema/tipo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaTipoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaTipoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoSistemaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaTipoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoSistemaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaTipoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaTipoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoSistemaViewModelHttp>> {
    return this.apiSistemaTipoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoSistemaViewModelHttp>>): Array<TipoSistemaViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaTipoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaTipoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoSistemaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaTipoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoSistemaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaTipoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaTipoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoSistemaViewModelHttp>> {
    return this.apiSistemaTipoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoSistemaViewModelHttp>>): Array<TipoSistemaViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSistemaOperacaoGet()` */
  static readonly ApiSistemaOperacaoGetPath = '/api/Sistema/operacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaOperacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaOperacaoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaOperacaoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OperacaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaOperacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaOperacaoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiSistemaOperacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaOperacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaOperacaoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaOperacaoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OperacaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaOperacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaOperacaoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiSistemaOperacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSistemaSegmentoGet()` */
  static readonly ApiSistemaSegmentoGetPath = '/api/Sistema/segmento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaSegmentoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaSegmentoGet$Plain$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SegmentoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaSegmentoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaSegmentoGet$Plain(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiSistemaSegmentoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaSegmentoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaSegmentoGet$Json$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SegmentoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaSegmentoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaSegmentoGet$Json(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiSistemaSegmentoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSistemaGet()` */
  static readonly ApiSistemaGetPath = '/api/Sistema';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaGet$Plain$Response(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemasViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaGetPath, 'get');
    if (params) {
      rb.header('numeroPagina', params.numeroPagina, {});
      rb.header('tamanhoPagina', params.tamanhoPagina, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemasViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaGet$Plain(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<SistemasViewModelHttp> {
    return this.apiSistemaGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemasViewModelHttp>): SistemasViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaGet$Json$Response(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemasViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaGetPath, 'get');
    if (params) {
      rb.header('numeroPagina', params.numeroPagina, {});
      rb.header('tamanhoPagina', params.tamanhoPagina, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemasViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaGet$Json(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<SistemasViewModelHttp> {
    return this.apiSistemaGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemasViewModelHttp>): SistemasViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSistemaPost()` */
  static readonly ApiSistemaPostPath = '/api/Sistema';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaPost$Plain$Response(
    params?: {
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaPost$Plain(
    params?: {
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaPost$Json$Response(
    params?: {
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaPost$Json(
    params?: {
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSistemaIdGet()` */
  static readonly ApiSistemaIdGetPath = '/api/Sistema/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSistemaIdPut()` */
  static readonly ApiSistemaIdPutPath = '/api/Sistema/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaIdPut$Plain$Response(
    params: {
      id: number;
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaIdPut$Plain(
    params: {
      id: number;
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaIdPut$Json$Response(
    params: {
      id: number;
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSistemaIdPut$Json(
    params: {
      id: number;
      body?: SistemaViewModelHttp
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSistemaIdDelete()` */
  static readonly ApiSistemaIdDeletePath = '/api/Sistema/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSistemaIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SistemaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSistemaService.ApiSistemaIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SistemaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiSistemaIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSistemaIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<SistemaViewModelHttp> {
    return this.apiSistemaIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<SistemaViewModelHttp>): SistemaViewModelHttp => r.body)
    );
  }

}
