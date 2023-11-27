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

import { AcessoRequestViewModelHttp } from '../models/acesso-request-view-model-http';
import { AderenciaAcessoViewModelHttp } from '../models/aderencia-acesso-view-model-http';
import { PacoteAcessoViewModelHttp } from '../models/pacote-acesso-view-model-http';
import { TipoAcessoViewModelHttp } from '../models/tipo-acesso-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpAcessoService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAcessoTipoAcessoGet()` */
  static readonly ApiAcessoTipoAcessoGetPath = '/api/Acesso/TipoAcesso';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoTipoAcessoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoTipoAcessoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoAcessoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoTipoAcessoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoAcessoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoTipoAcessoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoTipoAcessoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoAcessoViewModelHttp>> {
    return this.apiAcessoTipoAcessoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoAcessoViewModelHttp>>): Array<TipoAcessoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoTipoAcessoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoTipoAcessoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoAcessoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoTipoAcessoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoAcessoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoTipoAcessoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoTipoAcessoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoAcessoViewModelHttp>> {
    return this.apiAcessoTipoAcessoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoAcessoViewModelHttp>>): Array<TipoAcessoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAcessoAderenciaAcessoGet()` */
  static readonly ApiAcessoAderenciaAcessoGetPath = '/api/Acesso/AderenciaAcesso';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoAderenciaAcessoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoAderenciaAcessoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoAderenciaAcessoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoAderenciaAcessoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoAderenciaAcessoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AderenciaAcessoViewModelHttp>> {
    return this.apiAcessoAderenciaAcessoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>): Array<AderenciaAcessoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoAderenciaAcessoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoAderenciaAcessoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoAderenciaAcessoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoAderenciaAcessoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAcessoAderenciaAcessoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AderenciaAcessoViewModelHttp>> {
    return this.apiAcessoAderenciaAcessoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AderenciaAcessoViewModelHttp>>): Array<AderenciaAcessoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAcessoPost()` */
  static readonly ApiAcessoPostPath = '/api/Acesso';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAcessoPost$Plain$Response(
    params?: {
      body?: AcessoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAcessoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAcessoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAcessoPost$Plain(
    params?: {
      body?: AcessoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAcessoViewModelHttp> {
    return this.apiAcessoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAcessoViewModelHttp>): PacoteAcessoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAcessoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAcessoPost$Json$Response(
    params?: {
      body?: AcessoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAcessoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAcessoService.ApiAcessoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAcessoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAcessoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAcessoPost$Json(
    params?: {
      body?: AcessoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAcessoViewModelHttp> {
    return this.apiAcessoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAcessoViewModelHttp>): PacoteAcessoViewModelHttp => r.body)
    );
  }

}
