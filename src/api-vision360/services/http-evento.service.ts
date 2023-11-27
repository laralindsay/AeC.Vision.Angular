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

import { EventoRequestViewModelHttp } from '../models/evento-request-view-model-http';
import { OperacaoViewModelHttp } from '../models/operacao-view-model-http';
import { PacoteEventoViewModelHttp } from '../models/pacote-evento-view-model-http';
import { ScreenshotViewModelHttp } from '../models/screenshot-view-model-http';
import { SegmentoViewModelHttp } from '../models/segmento-view-model-http';
import { TipoEventoViewModelHttp } from '../models/tipo-evento-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpEventoService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiEventoTipoEventoGet()` */
  static readonly ApiEventoTipoEventoGetPath = '/api/Evento/tipoEvento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoTipoEventoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoTipoEventoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoEventoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoTipoEventoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoEventoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoTipoEventoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoTipoEventoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoEventoViewModelHttp>> {
    return this.apiEventoTipoEventoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoEventoViewModelHttp>>): Array<TipoEventoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoTipoEventoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoTipoEventoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoEventoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoTipoEventoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoEventoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoTipoEventoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoTipoEventoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoEventoViewModelHttp>> {
    return this.apiEventoTipoEventoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoEventoViewModelHttp>>): Array<TipoEventoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiEventoOperacaoGet()` */
  static readonly ApiEventoOperacaoGetPath = '/api/Evento/operacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoOperacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoOperacaoGet$Plain$Response(
    params?: {
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoOperacaoGetPath, 'get');
    if (params) {
      rb.query('matricula', params.matricula, {});
      rb.query('perfil', params.perfil, {});
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
   * To access the full response (for headers, for example), `apiEventoOperacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoOperacaoGet$Plain(
    params?: {
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiEventoOperacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoOperacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoOperacaoGet$Json$Response(
    params?: {
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoOperacaoGetPath, 'get');
    if (params) {
      rb.query('matricula', params.matricula, {});
      rb.query('perfil', params.perfil, {});
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
   * To access the full response (for headers, for example), `apiEventoOperacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoOperacaoGet$Json(
    params?: {
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiEventoOperacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiEventoSegmentoGet()` */
  static readonly ApiEventoSegmentoGetPath = '/api/Evento/segmento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoSegmentoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoSegmentoGet$Plain$Response(
    params?: {
      idOperacao?: number;
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
      rb.query('matricula', params.matricula, {});
      rb.query('perfil', params.perfil, {});
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
   * To access the full response (for headers, for example), `apiEventoSegmentoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoSegmentoGet$Plain(
    params?: {
      idOperacao?: number;
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiEventoSegmentoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoSegmentoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoSegmentoGet$Json$Response(
    params?: {
      idOperacao?: number;
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
      rb.query('matricula', params.matricula, {});
      rb.query('perfil', params.perfil, {});
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
   * To access the full response (for headers, for example), `apiEventoSegmentoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoSegmentoGet$Json(
    params?: {
      idOperacao?: number;
      matricula?: string;
      perfil?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiEventoSegmentoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiEventoScreenshotGet()` */
  static readonly ApiEventoScreenshotGetPath = '/api/Evento/Screenshot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoScreenshotGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoScreenshotGet$Plain$Response(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ScreenshotViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoScreenshotGetPath, 'get');
    if (params) {
      rb.query('idRegistro', params.idRegistro, {});
      rb.query('idTipoOcorrencia', params.idTipoOcorrencia, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ScreenshotViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoScreenshotGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoScreenshotGet$Plain(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<ScreenshotViewModelHttp> {
    return this.apiEventoScreenshotGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ScreenshotViewModelHttp>): ScreenshotViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoScreenshotGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoScreenshotGet$Json$Response(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ScreenshotViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoScreenshotGetPath, 'get');
    if (params) {
      rb.query('idRegistro', params.idRegistro, {});
      rb.query('idTipoOcorrencia', params.idTipoOcorrencia, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ScreenshotViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoScreenshotGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiEventoScreenshotGet$Json(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<ScreenshotViewModelHttp> {
    return this.apiEventoScreenshotGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ScreenshotViewModelHttp>): ScreenshotViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiEventoPost()` */
  static readonly ApiEventoPostPath = '/api/Evento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventoPost$Plain$Response(
    params?: {
      body?: EventoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteEventoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteEventoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventoPost$Plain(
    params?: {
      body?: EventoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteEventoViewModelHttp> {
    return this.apiEventoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteEventoViewModelHttp>): PacoteEventoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiEventoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventoPost$Json$Response(
    params?: {
      body?: EventoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteEventoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpEventoService.ApiEventoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteEventoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiEventoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiEventoPost$Json(
    params?: {
      body?: EventoRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteEventoViewModelHttp> {
    return this.apiEventoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteEventoViewModelHttp>): PacoteEventoViewModelHttp => r.body)
    );
  }

}
