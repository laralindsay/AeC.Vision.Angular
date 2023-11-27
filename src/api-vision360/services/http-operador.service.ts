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

import { ChamadaRequestViewModelHttp } from '../models/chamada-request-view-model-http';
import { DashboardCriteriaHttp } from '../models/dashboard-criteria-http';
import { IndicadorAderenciaViewModelHttp } from '../models/indicador-aderencia-view-model-http';
import { IndicadorViewModelHttp } from '../models/indicador-view-model-http';
import { OfensorModelHttp } from '../models/ofensor-model-http';
import { OperadorDetalhadoModelHttp } from '../models/operador-detalhado-model-http';
import { PacoteLigacaoModelHttp } from '../models/pacote-ligacao-model-http';
import { PacoteProdutividadeModelHttp } from '../models/pacote-produtividade-model-http';
import { SistemaModelHttp } from '../models/sistema-model-http';

@Injectable({ providedIn: 'root' })
export class HttpOperadorService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiOperadorIdGet()` */
  static readonly ApiOperadorIdGetPath = '/api/Operador/id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOperadorIdGet$Plain$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OperadorDetalhadoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperadorDetalhadoModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOperadorIdGet$Plain(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<OperadorDetalhadoModelHttp> {
    return this.apiOperadorIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperadorDetalhadoModelHttp>): OperadorDetalhadoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOperadorIdGet$Json$Response(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<OperadorDetalhadoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OperadorDetalhadoModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOperadorIdGet$Json(
    params?: {
      id?: number;
    },
    context?: HttpContext
  ): Observable<OperadorDetalhadoModelHttp> {
    return this.apiOperadorIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<OperadorDetalhadoModelHttp>): OperadorDetalhadoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdChamadasPost()` */
  static readonly ApiOperadorIdChamadasPostPath = '/api/Operador/{id}/chamadas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndicadorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdChamadasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiOperadorIdChamadasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndicadorViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdChamadasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiOperadorIdChamadasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdChamadasAnaliticoPost()` */
  static readonly ApiOperadorIdChamadasAnaliticoPostPath = '/api/Operador/id/chamadas-analitico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasAnaliticoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPost$Plain$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasAnaliticoPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteLigacaoModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdChamadasAnaliticoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPost$Plain(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiOperadorIdChamadasAnaliticoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasAnaliticoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPost$Json$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasAnaliticoPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteLigacaoModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdChamadasAnaliticoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPost$Json(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiOperadorIdChamadasAnaliticoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdChamadasAnaliticoCsvPost()` */
  static readonly ApiOperadorIdChamadasAnaliticoCsvPostPath = '/api/Operador/id/chamadas-analitico/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasAnaliticoCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoCsvPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasAnaliticoCsvPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiOperadorIdChamadasAnaliticoCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoCsvPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOperadorIdChamadasAnaliticoCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdChamadasAnaliticoPdfPost()` */
  static readonly ApiOperadorIdChamadasAnaliticoPdfPostPath = '/api/Operador/id/chamadas-analitico/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdChamadasAnaliticoPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPdfPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdChamadasAnaliticoPdfPostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiOperadorIdChamadasAnaliticoPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdChamadasAnaliticoPdfPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOperadorIdChamadasAnaliticoPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdAderenciaPost()` */
  static readonly ApiOperadorIdAderenciaPostPath = '/api/Operador/{id}/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdAderenciaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdAderenciaPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndicadorAderenciaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdAderenciaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiOperadorIdAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdAderenciaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdAderenciaPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IndicadorAderenciaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdAderenciaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiOperadorIdAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdIndicadoresPost()` */
  static readonly ApiOperadorIdIndicadoresPostPath = '/api/Operador/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdIndicadoresPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdIndicadoresPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IndicadorViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdIndicadoresPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiOperadorIdIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdIndicadoresPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdIndicadoresPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IndicadorViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdIndicadoresPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiOperadorIdIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasWebAderentePost()` */
  static readonly ApiOperadorIdSistemasWebAderentePostPath = '/api/Operador/{id}/sistemas/web-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasWebAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasWebAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasWebAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasWebAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasWebAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasWebAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasWebAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasWebAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasWebInaderentePost()` */
  static readonly ApiOperadorIdSistemasWebInaderentePostPath = '/api/Operador/{id}/sistemas/web-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasWebInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasWebInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasWebInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasWebInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasWebInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasWebInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasWebInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasWebInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasWebInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasDesktopAderentePost()` */
  static readonly ApiOperadorIdSistemasDesktopAderentePostPath = '/api/Operador/{id}/sistemas/desktop-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDesktopAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDesktopAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDesktopAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDesktopAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDesktopAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDesktopAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDesktopAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDesktopAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasDesktopInaderentePost()` */
  static readonly ApiOperadorIdSistemasDesktopInaderentePostPath = '/api/Operador/{id}/sistemas/desktop-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDesktopInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDesktopInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDesktopInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDesktopInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDesktopInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDesktopInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDesktopInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDesktopInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDesktopInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasDiretorioAderentePost()` */
  static readonly ApiOperadorIdSistemasDiretorioAderentePostPath = '/api/Operador/{id}/sistemas/diretorio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDiretorioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDiretorioAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDiretorioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDiretorioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDiretorioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDiretorioAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDiretorioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDiretorioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdSistemasDiretorioInaderentePost()` */
  static readonly ApiOperadorIdSistemasDiretorioInaderentePostPath = '/api/Operador/{id}/sistemas/diretorio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDiretorioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDiretorioInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDiretorioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDiretorioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdSistemasDiretorioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdSistemasDiretorioInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SistemaModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdSistemasDiretorioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdSistemasDiretorioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiOperadorIdSistemasDiretorioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresImprodutividadeAderentePost()` */
  static readonly ApiOperadorIdOfensoresImprodutividadeAderentePostPath = '/api/Operador/{id}/ofensores/improdutividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresImprodutividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresImprodutividadeAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresImprodutividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresImprodutividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresImprodutividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresImprodutividadeAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresImprodutividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresImprodutividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresImprodutividadeInaderentePost()` */
  static readonly ApiOperadorIdOfensoresImprodutividadeInaderentePostPath = '/api/Operador/{id}/ofensores/improdutividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresImprodutividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresImprodutividadeInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresImprodutividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresImprodutividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresImprodutividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresImprodutividadeInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresImprodutividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresImprodutividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresImprodutividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresInatividadeAderentePost()` */
  static readonly ApiOperadorIdOfensoresInatividadeAderentePostPath = '/api/Operador/{id}/ofensores/inatividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresInatividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresInatividadeAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresInatividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresInatividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresInatividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresInatividadeAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresInatividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresInatividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresInatividadeInaderentePost()` */
  static readonly ApiOperadorIdOfensoresInatividadeInaderentePostPath = '/api/Operador/{id}/ofensores/inatividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresInatividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresInatividadeInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresInatividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresInatividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresInatividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresInatividadeInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresInatividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresInatividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresInatividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresSilencioAderentePost()` */
  static readonly ApiOperadorIdOfensoresSilencioAderentePostPath = '/api/Operador/{id}/ofensores/silencio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresSilencioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresSilencioAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresSilencioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresSilencioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresSilencioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresSilencioAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresSilencioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresSilencioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresSilencioInaderentePost()` */
  static readonly ApiOperadorIdOfensoresSilencioInaderentePostPath = '/api/Operador/{id}/ofensores/silencio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresSilencioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresSilencioInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresSilencioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresSilencioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresSilencioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresSilencioInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresSilencioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresSilencioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresSilencioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresAusenciaAderentePost()` */
  static readonly ApiOperadorIdOfensoresAusenciaAderentePostPath = '/api/Operador/{id}/ofensores/ausencia-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresAusenciaAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresAusenciaAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresAusenciaAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresAusenciaAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresAusenciaAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresAusenciaAderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresAusenciaAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresAusenciaAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdOfensoresAusenciaInaderentePost()` */
  static readonly ApiOperadorIdOfensoresAusenciaInaderentePostPath = '/api/Operador/{id}/ofensores/ausencia-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresAusenciaInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresAusenciaInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresAusenciaInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresAusenciaInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdOfensoresAusenciaInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdOfensoresAusenciaInaderentePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OfensorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdOfensoresAusenciaInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdOfensoresAusenciaInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiOperadorIdOfensoresAusenciaInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiOperadorIdProdutividadePost()` */
  static readonly ApiOperadorIdProdutividadePostPath = '/api/Operador/{id}/produtividade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdProdutividadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdProdutividadePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdProdutividadePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteProdutividadeModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdProdutividadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdProdutividadePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiOperadorIdProdutividadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOperadorIdProdutividadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdProdutividadePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpOperadorService.ApiOperadorIdProdutividadePostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteProdutividadeModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOperadorIdProdutividadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOperadorIdProdutividadePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiOperadorIdProdutividadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

}
