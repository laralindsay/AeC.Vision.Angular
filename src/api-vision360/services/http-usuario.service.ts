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

import { AdministradorViewModelHttp } from '../models/administrador-view-model-http';
import { UsuarioViewModelHttp } from '../models/usuario-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpUsuarioService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUsuarioUsuarioLogadoGet()` */
  static readonly ApiUsuarioUsuarioLogadoGetPath = '/api/Usuario/usuario-logado';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioUsuarioLogadoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioLogadoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioUsuarioLogadoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioUsuarioLogadoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioLogadoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioUsuarioLogadoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioUsuarioLogadoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioLogadoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioUsuarioLogadoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioUsuarioLogadoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioLogadoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioUsuarioLogadoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioGet()` */
  static readonly ApiUsuarioGetPath = '/api/Usuario';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AdministradorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdministradorViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AdministradorViewModelHttp>> {
    return this.apiUsuarioGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AdministradorViewModelHttp>>): Array<AdministradorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AdministradorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdministradorViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AdministradorViewModelHttp>> {
    return this.apiUsuarioGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AdministradorViewModelHttp>>): Array<AdministradorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiUsuarioPost()` */
  static readonly ApiUsuarioPostPath = '/api/Usuario';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost$Plain$Response(
    params?: {
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost$Plain(
    params?: {
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost$Json$Response(
    params?: {
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioPost$Json(
    params?: {
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioIdGet()` */
  static readonly ApiUsuarioIdGetPath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioIdPut()` */
  static readonly ApiUsuarioIdPutPath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut$Plain$Response(
    params: {
      id: number;
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut$Plain(
    params: {
      id: number;
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut$Json$Response(
    params: {
      id: number;
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsuarioIdPut$Json(
    params: {
      id: number;
      body?: AdministradorViewModelHttp
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioIdDelete()` */
  static readonly ApiUsuarioIdDeletePath = '/api/Usuario/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AdministradorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdministradorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<AdministradorViewModelHttp> {
    return this.apiUsuarioIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdministradorViewModelHttp>): AdministradorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioUsuarioFuncionalidadesIdGet()` */
  static readonly ApiUsuarioUsuarioFuncionalidadesIdGetPath = '/api/Usuario/UsuarioFuncionalidades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioUsuarioFuncionalidadesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioFuncionalidadesIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioUsuarioFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioUsuarioFuncionalidadesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioFuncionalidadesIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioUsuarioFuncionalidadesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioUsuarioFuncionalidadesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioFuncionalidadesIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioUsuarioFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioUsuarioFuncionalidadesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioUsuarioFuncionalidadesIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioUsuarioFuncionalidadesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioFuncionalidadesIdGet()` */
  static readonly ApiUsuarioFuncionalidadesIdGetPath = '/api/Usuario/Funcionalidades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioFuncionalidadesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioFuncionalidadesIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioFuncionalidadesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioFuncionalidadesIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioFuncionalidadesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioFuncionalidadesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioFuncionalidadesIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioFuncionalidadesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioFuncionalidadesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioFuncionalidadesIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioFuncionalidadesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioPermissoesIdGet()` */
  static readonly ApiUsuarioPermissoesIdGetPath = '/api/Usuario/Permissoes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioPermissoesIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioPermissoesIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioPermissoesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioPermissoesIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioPermissoesIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioPermissoesIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioPermissoesIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioPermissoesIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioPermissoesIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioPermissoesIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioPermissoesIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioPermissoesIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiUsuarioMatriculaIdGet()` */
  static readonly ApiUsuarioMatriculaIdGetPath = '/api/Usuario/matricula/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioMatriculaIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioMatriculaIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioMatriculaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioMatriculaIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioMatriculaIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioMatriculaIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsuarioMatriculaIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioMatriculaIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UsuarioViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpUsuarioService.ApiUsuarioMatriculaIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UsuarioViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUsuarioMatriculaIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsuarioMatriculaIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<UsuarioViewModelHttp> {
    return this.apiUsuarioMatriculaIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsuarioViewModelHttp>): UsuarioViewModelHttp => r.body)
    );
  }

}
