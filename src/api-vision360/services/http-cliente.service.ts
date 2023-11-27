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

import { ClienteViewModelHttp } from '../models/cliente-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpClienteService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiClienteGet()` */
  static readonly ApiClienteGetPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClienteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClienteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClienteViewModelHttp>> {
    return this.apiClienteGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClienteViewModelHttp>>): Array<ClienteViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ClienteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ClienteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ClienteViewModelHttp>> {
    return this.apiClienteGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ClienteViewModelHttp>>): Array<ClienteViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiClientePost()` */
  static readonly ApiClientePostPath = '/api/Cliente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Plain$Response(
    params?: {
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Plain(
    params?: {
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClientePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClientePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Json$Response(
    params?: {
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClientePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClientePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClientePost$Json(
    params?: {
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClientePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiClienteIdGet()` */
  static readonly ApiClienteIdGetPath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiClienteIdPut()` */
  static readonly ApiClienteIdPutPath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut$Plain$Response(
    params: {
      id: number;
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut$Plain(
    params: {
      id: number;
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut$Json$Response(
    params: {
      id: number;
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiClienteIdPut$Json(
    params: {
      id: number;
      body?: ClienteViewModelHttp
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiClienteIdDelete()` */
  static readonly ApiClienteIdDeletePath = '/api/Cliente/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiClienteIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ClienteViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpClienteService.ApiClienteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ClienteViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiClienteIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiClienteIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ClienteViewModelHttp> {
    return this.apiClienteIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ClienteViewModelHttp>): ClienteViewModelHttp => r.body)
    );
  }

}
