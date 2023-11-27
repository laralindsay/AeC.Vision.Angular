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
import { PerfilViewModelHttp } from '../models/perfil-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpPerfilService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPerfilGet()` */
  static readonly ApiPerfilGetPath = '/api/Perfil';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<PerfilViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PerfilViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<PerfilViewModelHttp>> {
    return this.apiPerfilGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PerfilViewModelHttp>>): Array<PerfilViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<PerfilViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PerfilViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<PerfilViewModelHttp>> {
    return this.apiPerfilGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PerfilViewModelHttp>>): Array<PerfilViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiPerfilPost()` */
  static readonly ApiPerfilPostPath = '/api/Perfil';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilPost$Plain$Response(
    params?: {
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilPost$Plain(
    params?: {
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilPost$Json$Response(
    params?: {
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilPost$Json(
    params?: {
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiPerfilIdGet()` */
  static readonly ApiPerfilIdGetPath = '/api/Perfil/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiPerfilIdPut()` */
  static readonly ApiPerfilIdPutPath = '/api/Perfil/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilIdPut$Plain$Response(
    params: {
      id: number;
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilIdPut$Plain(
    params: {
      id: number;
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilIdPut$Json$Response(
    params: {
      id: number;
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPerfilIdPut$Json(
    params: {
      id: number;
      body?: PerfilViewModelHttp
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiPerfilIdDelete()` */
  static readonly ApiPerfilIdDeletePath = '/api/Perfil/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PerfilViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PerfilViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPerfilIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<PerfilViewModelHttp> {
    return this.apiPerfilIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PerfilViewModelHttp>): PerfilViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiPerfilFuncionalidadesIdGet()` */
  static readonly ApiPerfilFuncionalidadesIdGetPath = '/api/Perfil/Funcionalidades{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilFuncionalidadesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilFuncionalidadesIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiPerfilFuncionalidadesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilFuncionalidadesIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Array<FuncionalidadeViewModelHttp>> {
    return this.apiPerfilFuncionalidadesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>): Array<FuncionalidadeViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPerfilFuncionalidadesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilFuncionalidadesIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpPerfilService.ApiPerfilFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiPerfilFuncionalidadesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPerfilFuncionalidadesIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Array<FuncionalidadeViewModelHttp>> {
    return this.apiPerfilFuncionalidadesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionalidadeViewModelHttp>>): Array<FuncionalidadeViewModelHttp> => r.body)
    );
  }

}
