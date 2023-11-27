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
import { HierarquiaCriteriaHttp } from '../models/hierarquia-criteria-http';
import { IndicadorAderenciaViewModelHttp } from '../models/indicador-aderencia-view-model-http';
import { IndicadorViewModelHttp } from '../models/indicador-view-model-http';
import { OfensorModelHttp } from '../models/ofensor-model-http';
import { PacoteHierarquiaViewModelHttp } from '../models/pacote-hierarquia-view-model-http';
import { PacoteLigacaoModelHttp } from '../models/pacote-ligacao-model-http';
import { PacoteProdutividadeModelHttp } from '../models/pacote-produtividade-model-http';
import { SistemaModelHttp } from '../models/sistema-model-http';

@Injectable({ providedIn: 'root' })
export class HttpCoordenadorService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCoordenadorHierarquiaPost()` */
  static readonly ApiCoordenadorHierarquiaPostPath = '/api/Coordenador/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorHierarquiaPost$Plain$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorHierarquiaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCoordenadorHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorHierarquiaPost$Plain(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiCoordenadorHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorHierarquiaPost$Json$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorHierarquiaPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCoordenadorHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorHierarquiaPost$Json(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiCoordenadorHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdHierarquiaPost()` */
  static readonly ApiCoordenadorIdHierarquiaPostPath = '/api/Coordenador/{id}/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdHierarquiaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdHierarquiaPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCoordenadorIdHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdHierarquiaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiCoordenadorIdHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdHierarquiaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdHierarquiaPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PacoteHierarquiaViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCoordenadorIdHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdHierarquiaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiCoordenadorIdHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdAderenciaPost()` */
  static readonly ApiCoordenadorIdAderenciaPostPath = '/api/Coordenador/{id}/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdAderenciaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdAderenciaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiCoordenadorIdAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdAderenciaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdAderenciaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiCoordenadorIdAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdIndicadoresPost()` */
  static readonly ApiCoordenadorIdIndicadoresPostPath = '/api/Coordenador/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdIndicadoresPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdIndicadoresPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiCoordenadorIdIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdIndicadoresPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdIndicadoresPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiCoordenadorIdIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdChamadasPost()` */
  static readonly ApiCoordenadorIdChamadasPostPath = '/api/Coordenador/{id}/chamadas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiCoordenadorIdChamadasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiCoordenadorIdChamadasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdChamadasAnaliticoPost()` */
  static readonly ApiCoordenadorIdChamadasAnaliticoPostPath = '/api/Coordenador/id/chamadas-analitico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasAnaliticoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPost$Plain$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasAnaliticoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPost$Plain(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiCoordenadorIdChamadasAnaliticoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasAnaliticoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPost$Json$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasAnaliticoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPost$Json(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiCoordenadorIdChamadasAnaliticoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdChamadasAnaliticoCsvPost()` */
  static readonly ApiCoordenadorIdChamadasAnaliticoCsvPostPath = '/api/Coordenador/id/chamadas-analitico/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasAnaliticoCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoCsvPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasAnaliticoCsvPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasAnaliticoCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoCsvPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiCoordenadorIdChamadasAnaliticoCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdChamadasAnaliticoPdfPost()` */
  static readonly ApiCoordenadorIdChamadasAnaliticoPdfPostPath = '/api/Coordenador/id/chamadas-analitico/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdChamadasAnaliticoPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPdfPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdChamadasAnaliticoPdfPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdChamadasAnaliticoPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdChamadasAnaliticoPdfPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiCoordenadorIdChamadasAnaliticoPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasWebAderentePost()` */
  static readonly ApiCoordenadorIdSistemasWebAderentePostPath = '/api/Coordenador/{id}/sistemas/web-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasWebAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasWebAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasWebAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasWebAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasWebAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasWebAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasWebInaderentePost()` */
  static readonly ApiCoordenadorIdSistemasWebInaderentePostPath = '/api/Coordenador/{id}/sistemas/web-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasWebInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasWebInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasWebInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasWebInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasWebInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasWebInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasWebInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasDesktopAderentePost()` */
  static readonly ApiCoordenadorIdSistemasDesktopAderentePostPath = '/api/Coordenador/{id}/sistemas/desktop-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDesktopAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDesktopAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDesktopAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDesktopAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDesktopAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDesktopAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasDesktopInaderentePost()` */
  static readonly ApiCoordenadorIdSistemasDesktopInaderentePostPath = '/api/Coordenador/{id}/sistemas/desktop-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDesktopInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDesktopInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDesktopInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDesktopInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDesktopInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDesktopInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDesktopInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasDiretorioAderentePost()` */
  static readonly ApiCoordenadorIdSistemasDiretorioAderentePostPath = '/api/Coordenador/{id}/sistemas/diretorio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDiretorioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDiretorioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDiretorioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDiretorioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDiretorioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDiretorioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdSistemasDiretorioInaderentePost()` */
  static readonly ApiCoordenadorIdSistemasDiretorioInaderentePostPath = '/api/Coordenador/{id}/sistemas/diretorio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDiretorioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDiretorioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDiretorioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdSistemasDiretorioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdSistemasDiretorioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdSistemasDiretorioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiCoordenadorIdSistemasDiretorioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresImprodutividadeAderentePost()` */
  static readonly ApiCoordenadorIdOfensoresImprodutividadeAderentePostPath = '/api/Coordenador/{id}/ofensores/improdutividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresImprodutividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresImprodutividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresImprodutividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresImprodutividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresImprodutividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresImprodutividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresImprodutividadeInaderentePost()` */
  static readonly ApiCoordenadorIdOfensoresImprodutividadeInaderentePostPath = '/api/Coordenador/{id}/ofensores/improdutividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresImprodutividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresInatividadeAderentePost()` */
  static readonly ApiCoordenadorIdOfensoresInatividadeAderentePostPath = '/api/Coordenador/{id}/ofensores/inatividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresInatividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresInatividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresInatividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresInatividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresInatividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresInatividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresInatividadeInaderentePost()` */
  static readonly ApiCoordenadorIdOfensoresInatividadeInaderentePostPath = '/api/Coordenador/{id}/ofensores/inatividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresInatividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresInatividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresInatividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresInatividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresInatividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresInatividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresInatividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresSilencioAderentePost()` */
  static readonly ApiCoordenadorIdOfensoresSilencioAderentePostPath = '/api/Coordenador/{id}/ofensores/silencio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresSilencioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresSilencioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresSilencioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresSilencioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresSilencioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresSilencioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresSilencioInaderentePost()` */
  static readonly ApiCoordenadorIdOfensoresSilencioInaderentePostPath = '/api/Coordenador/{id}/ofensores/silencio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresSilencioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresSilencioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresSilencioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresSilencioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresSilencioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresSilencioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresSilencioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresAusenciaAderentePost()` */
  static readonly ApiCoordenadorIdOfensoresAusenciaAderentePostPath = '/api/Coordenador/{id}/ofensores/ausencia-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresAusenciaAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresAusenciaAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresAusenciaAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresAusenciaAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresAusenciaAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresAusenciaAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdOfensoresAusenciaInaderentePost()` */
  static readonly ApiCoordenadorIdOfensoresAusenciaInaderentePostPath = '/api/Coordenador/{id}/ofensores/ausencia-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresAusenciaInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresAusenciaInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresAusenciaInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdOfensoresAusenciaInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdOfensoresAusenciaInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdOfensoresAusenciaInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiCoordenadorIdOfensoresAusenciaInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiCoordenadorIdProdutividadePost()` */
  static readonly ApiCoordenadorIdProdutividadePostPath = '/api/Coordenador/{id}/produtividade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdProdutividadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdProdutividadePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdProdutividadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdProdutividadePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiCoordenadorIdProdutividadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCoordenadorIdProdutividadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdProdutividadePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpCoordenadorService.ApiCoordenadorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCoordenadorIdProdutividadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCoordenadorIdProdutividadePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiCoordenadorIdProdutividadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

}
