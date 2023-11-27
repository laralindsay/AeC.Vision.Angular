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

import { AlertaRequestViewModelHttp } from '../models/alerta-request-view-model-http';
import { DuracaoAlertaViewModelHttp } from '../models/duracao-alerta-view-model-http';
import { FeedbackViewmodelHttp } from '../models/feedback-viewmodel-http';
import { FuncionarioHttp } from '../models/funcionario-http';
import { PacoteAlertaViewModelHttp } from '../models/pacote-alerta-view-model-http';
import { ScreenshotViewModelHttp } from '../models/screenshot-view-model-http';
import { StatusAlertaViewModelHttp } from '../models/status-alerta-view-model-http';
import { TipoAlertaViewModelHttp } from '../models/tipo-alerta-view-model-http';
import { TipoPerfilHttp } from '../models/tipo-perfil-http';

@Injectable({ providedIn: 'root' })
export class HttpAlertaService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAlertaTipoAlertaGet()` */
  static readonly ApiAlertaTipoAlertaGetPath = '/api/Alerta/TipoAlerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaTipoAlertaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaTipoAlertaGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaTipoAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaTipoAlertaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaTipoAlertaGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoAlertaViewModelHttp>> {
    return this.apiAlertaTipoAlertaGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoAlertaViewModelHttp>>): Array<TipoAlertaViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaTipoAlertaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaTipoAlertaGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaTipoAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaTipoAlertaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaTipoAlertaGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoAlertaViewModelHttp>> {
    return this.apiAlertaTipoAlertaGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoAlertaViewModelHttp>>): Array<TipoAlertaViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAlertaStatusAlertaGet()` */
  static readonly ApiAlertaStatusAlertaGetPath = '/api/Alerta/StatusAlerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaStatusAlertaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaStatusAlertaGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<StatusAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaStatusAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StatusAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaStatusAlertaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaStatusAlertaGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<StatusAlertaViewModelHttp>> {
    return this.apiAlertaStatusAlertaGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StatusAlertaViewModelHttp>>): Array<StatusAlertaViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaStatusAlertaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaStatusAlertaGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<StatusAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaStatusAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<StatusAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaStatusAlertaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaStatusAlertaGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<StatusAlertaViewModelHttp>> {
    return this.apiAlertaStatusAlertaGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StatusAlertaViewModelHttp>>): Array<StatusAlertaViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAlertaDuracaoAlertaGet()` */
  static readonly ApiAlertaDuracaoAlertaGetPath = '/api/Alerta/DuracaoAlerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaDuracaoAlertaGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaDuracaoAlertaGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaDuracaoAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaDuracaoAlertaGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaDuracaoAlertaGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<DuracaoAlertaViewModelHttp>> {
    return this.apiAlertaDuracaoAlertaGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>): Array<DuracaoAlertaViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaDuracaoAlertaGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaDuracaoAlertaGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaDuracaoAlertaGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaDuracaoAlertaGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaDuracaoAlertaGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<DuracaoAlertaViewModelHttp>> {
    return this.apiAlertaDuracaoAlertaGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DuracaoAlertaViewModelHttp>>): Array<DuracaoAlertaViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAlertaSubordinadoGet()` */
  static readonly ApiAlertaSubordinadoGetPath = '/api/Alerta/Subordinado';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaSubordinadoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaSubordinadoGet$Plain$Response(
    params?: {
      id?: number;
      perfil?: TipoPerfilHttp;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionarioHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaSubordinadoGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('perfil', params.perfil, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FuncionarioHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaSubordinadoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaSubordinadoGet$Plain(
    params?: {
      id?: number;
      perfil?: TipoPerfilHttp;
    },
    context?: HttpContext
  ): Observable<Array<FuncionarioHttp>> {
    return this.apiAlertaSubordinadoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionarioHttp>>): Array<FuncionarioHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaSubordinadoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaSubordinadoGet$Json$Response(
    params?: {
      id?: number;
      perfil?: TipoPerfilHttp;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<FuncionarioHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaSubordinadoGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
      rb.query('perfil', params.perfil, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FuncionarioHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaSubordinadoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaSubordinadoGet$Json(
    params?: {
      id?: number;
      perfil?: TipoPerfilHttp;
    },
    context?: HttpContext
  ): Observable<Array<FuncionarioHttp>> {
    return this.apiAlertaSubordinadoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuncionarioHttp>>): Array<FuncionarioHttp> => r.body)
    );
  }

  /** Path part for operation `apiAlertaFeedbackGet()` */
  static readonly ApiAlertaFeedbackGetPath = '/api/Alerta/Feedback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaFeedbackGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaFeedbackGet$Plain$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FeedbackViewmodelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaFeedbackGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FeedbackViewmodelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaFeedbackGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaFeedbackGet$Plain(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<FeedbackViewmodelHttp> {
    return this.apiAlertaFeedbackGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FeedbackViewmodelHttp>): FeedbackViewmodelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaFeedbackGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaFeedbackGet$Json$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<FeedbackViewmodelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaFeedbackGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FeedbackViewmodelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaFeedbackGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaFeedbackGet$Json(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<FeedbackViewmodelHttp> {
    return this.apiAlertaFeedbackGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FeedbackViewmodelHttp>): FeedbackViewmodelHttp => r.body)
    );
  }

  /** Path part for operation `apiAlertaFeedbackPost()` */
  static readonly ApiAlertaFeedbackPostPath = '/api/Alerta/Feedback';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaFeedbackPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaFeedbackPost$Response(
    params?: {
      body?: FeedbackViewmodelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaFeedbackPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaFeedbackPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaFeedbackPost(
    params?: {
      body?: FeedbackViewmodelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAlertaFeedbackPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAlertaScreenshotGet()` */
  static readonly ApiAlertaScreenshotGetPath = '/api/Alerta/Screenshot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaScreenshotGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaScreenshotGet$Plain$Response(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ScreenshotViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaScreenshotGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAlertaScreenshotGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaScreenshotGet$Plain(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<ScreenshotViewModelHttp> {
    return this.apiAlertaScreenshotGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ScreenshotViewModelHttp>): ScreenshotViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaScreenshotGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaScreenshotGet$Json$Response(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ScreenshotViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaScreenshotGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAlertaScreenshotGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAlertaScreenshotGet$Json(
    params?: {
      idRegistro?: number;
      idTipoOcorrencia?: number;
    },
    context?: HttpContext
  ): Observable<ScreenshotViewModelHttp> {
    return this.apiAlertaScreenshotGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ScreenshotViewModelHttp>): ScreenshotViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiAlertaPost()` */
  static readonly ApiAlertaPostPath = '/api/Alerta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost$Plain$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAlertaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAlertaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost$Plain(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAlertaViewModelHttp> {
    return this.apiAlertaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAlertaViewModelHttp>): PacoteAlertaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost$Json$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAlertaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAlertaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPost$Json(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAlertaViewModelHttp> {
    return this.apiAlertaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAlertaViewModelHttp>): PacoteAlertaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiAlertaCsvPost()` */
  static readonly ApiAlertaCsvPostPath = '/api/Alerta/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaCsvPost$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaCsvPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaCsvPost(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAlertaCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAlertaPdfPost()` */
  static readonly ApiAlertaPdfPostPath = '/api/Alerta/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPdfPost$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaPdfPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaPdfPost(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAlertaPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAlertaSistemasPost()` */
  static readonly ApiAlertaSistemasPostPath = '/api/Alerta/Sistemas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaSistemasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaSistemasPost$Plain$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAlertaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaSistemasPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAlertaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaSistemasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaSistemasPost$Plain(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAlertaViewModelHttp> {
    return this.apiAlertaSistemasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAlertaViewModelHttp>): PacoteAlertaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAlertaSistemasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaSistemasPost$Json$Response(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteAlertaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAlertaService.ApiAlertaSistemasPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteAlertaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAlertaSistemasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAlertaSistemasPost$Json(
    params?: {
      body?: AlertaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteAlertaViewModelHttp> {
    return this.apiAlertaSistemasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteAlertaViewModelHttp>): PacoteAlertaViewModelHttp => r.body)
    );
  }

}
