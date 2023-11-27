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

import { ProjetoViewModelHttp } from '../models/projeto-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpProjetoService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiProjetoGet()` */
  static readonly ApiProjetoGetPath = '/api/Projeto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ProjetoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjetoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ProjetoViewModelHttp>> {
    return this.apiProjetoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjetoViewModelHttp>>): Array<ProjetoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ProjetoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProjetoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<ProjetoViewModelHttp>> {
    return this.apiProjetoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ProjetoViewModelHttp>>): Array<ProjetoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiProjetoPost()` */
  static readonly ApiProjetoPostPath = '/api/Projeto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoPost$Plain$Response(
    params?: {
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoPost$Plain(
    params?: {
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoPost$Json$Response(
    params?: {
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoPost$Json(
    params?: {
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiProjetoIdGet()` */
  static readonly ApiProjetoIdGetPath = '/api/Projeto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiProjetoIdPut()` */
  static readonly ApiProjetoIdPutPath = '/api/Projeto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoIdPut$Plain$Response(
    params: {
      id: number;
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoIdPut$Plain(
    params: {
      id: number;
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoIdPut$Json$Response(
    params: {
      id: number;
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProjetoIdPut$Json(
    params: {
      id: number;
      body?: ProjetoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiProjetoIdDelete()` */
  static readonly ApiProjetoIdDeletePath = '/api/Projeto/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProjetoIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ProjetoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpProjetoService.ApiProjetoIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProjetoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiProjetoIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProjetoIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ProjetoViewModelHttp> {
    return this.apiProjetoIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProjetoViewModelHttp>): ProjetoViewModelHttp => r.body)
    );
  }

}
