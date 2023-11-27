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

import { FuncionalidadeViewModelHttp } from '../models/funcionalidade-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpFuncionalidadeService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiFuncionalidadeGet()` */
  static readonly ApiFuncionalidadeGetPath = '/api/Funcionalidade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FuncionalidadeViewModelHttp>> {
    return this.apiFuncionalidadeGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>): Array<FuncionalidadeViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<FuncionalidadeViewModelHttp>> {
    return this.apiFuncionalidadeGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>): Array<FuncionalidadeViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiFuncionalidadePost()` */
  static readonly ApiFuncionalidadePostPath = '/api/Funcionalidade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadePost$Plain$Response(
    params?: {
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadePost$Plain(
    params?: {
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadePost$Json$Response(
    params?: {
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadePost$Json(
    params?: {
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiFuncionalidadeIdGet()` */
  static readonly ApiFuncionalidadeIdGetPath = '/api/Funcionalidade/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiFuncionalidadeIdPut()` */
  static readonly ApiFuncionalidadeIdPutPath = '/api/Funcionalidade/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadeIdPut$Plain$Response(
    params: {
      id: number;
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadeIdPut$Plain(
    params: {
      id: number;
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadeIdPut$Json$Response(
    params: {
      id: number;
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFuncionalidadeIdPut$Json(
    params: {
      id: number;
      body?: FuncionalidadeViewModelHttp
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiFuncionalidadeIdDelete()` */
  static readonly ApiFuncionalidadeIdDeletePath = '/api/Funcionalidade/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet()` */
  static readonly ApiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGetPath = '/api/Funcionalidade/ValidaFuncionalidade/{nomeFuncionalidade}/{idAcao}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain$Response(
    params: {
      nomeFuncionalidade: string;
      idAcao: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGetPath, 'get');
    if (params) {
      rb.path('nomeFuncionalidade', params.nomeFuncionalidade, {});
      rb.path('idAcao', params.idAcao, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain(
    params: {
      nomeFuncionalidade: string;
      idAcao: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Json$Response(
    params: {
      nomeFuncionalidade: string;
      idAcao: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FuncionalidadeViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpFuncionalidadeService.ApiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGetPath, 'get');
    if (params) {
      rb.path('nomeFuncionalidade', params.nomeFuncionalidade, {});
      rb.path('idAcao', params.idAcao, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FuncionalidadeViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Json(
    params: {
      nomeFuncionalidade: string;
      idAcao: number;
    },
    context?: HttpContext
  ): Observable<FuncionalidadeViewModelHttp> {
    return this.apiFuncionalidadeValidaFuncionalidadeNomeFuncionalidadeIdAcaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FuncionalidadeViewModelHttp>): FuncionalidadeViewModelHttp => r.body)
    );
  }

}
