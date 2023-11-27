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
export class HttpDiretorService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDiretorHierarquiaPost()` */
  static readonly ApiDiretorHierarquiaPostPath = '/api/Diretor/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorHierarquiaPost$Plain$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorHierarquiaPost$Plain(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDiretorHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorHierarquiaPost$Json$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorHierarquiaPost$Json(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDiretorHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdHierarquiaPost()` */
  static readonly ApiDiretorIdHierarquiaPostPath = '/api/Diretor/{id}/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdHierarquiaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdHierarquiaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDiretorIdHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdHierarquiaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdHierarquiaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDiretorIdHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdAderenciaPost()` */
  static readonly ApiDiretorIdAderenciaPostPath = '/api/Diretor/{id}/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdAderenciaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdAderenciaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiDiretorIdAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdAderenciaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdAderenciaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiDiretorIdAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdIndicadoresPost()` */
  static readonly ApiDiretorIdIndicadoresPostPath = '/api/Diretor/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdIndicadoresPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdIndicadoresPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiDiretorIdIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdIndicadoresPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdIndicadoresPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiDiretorIdIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdChamadasPost()` */
  static readonly ApiDiretorIdChamadasPostPath = '/api/Diretor/{id}/chamadas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiDiretorIdChamadasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiDiretorIdChamadasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdChamadasAnaliticoPost()` */
  static readonly ApiDiretorIdChamadasAnaliticoPostPath = '/api/Diretor/id/chamadas-analitico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasAnaliticoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPost$Plain$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasAnaliticoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPost$Plain(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiDiretorIdChamadasAnaliticoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasAnaliticoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPost$Json$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasAnaliticoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPost$Json(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiDiretorIdChamadasAnaliticoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdChamadasAnaliticoCsvPost()` */
  static readonly ApiDiretorIdChamadasAnaliticoCsvPostPath = '/api/Diretor/id/chamadas-analitico/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasAnaliticoCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoCsvPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasAnaliticoCsvPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasAnaliticoCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoCsvPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiDiretorIdChamadasAnaliticoCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdChamadasAnaliticoPdfPost()` */
  static readonly ApiDiretorIdChamadasAnaliticoPdfPostPath = '/api/Diretor/id/chamadas-analitico/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdChamadasAnaliticoPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPdfPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdChamadasAnaliticoPdfPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdChamadasAnaliticoPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdChamadasAnaliticoPdfPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiDiretorIdChamadasAnaliticoPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasWebAderentePost()` */
  static readonly ApiDiretorIdSistemasWebAderentePostPath = '/api/Diretor/{id}/sistemas/web-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasWebAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasWebAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasWebAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasWebAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasWebAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasWebAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasWebInaderentePost()` */
  static readonly ApiDiretorIdSistemasWebInaderentePostPath = '/api/Diretor/{id}/sistemas/web-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasWebInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasWebInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasWebInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasWebInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasWebInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasWebInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasWebInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasDesktopAderentePost()` */
  static readonly ApiDiretorIdSistemasDesktopAderentePostPath = '/api/Diretor/{id}/sistemas/desktop-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDesktopAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDesktopAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDesktopAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDesktopAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDesktopAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDesktopAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasDesktopInaderentePost()` */
  static readonly ApiDiretorIdSistemasDesktopInaderentePostPath = '/api/Diretor/{id}/sistemas/desktop-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDesktopInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDesktopInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDesktopInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDesktopInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDesktopInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDesktopInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDesktopInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasDiretorioAderentePost()` */
  static readonly ApiDiretorIdSistemasDiretorioAderentePostPath = '/api/Diretor/{id}/sistemas/diretorio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDiretorioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDiretorioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDiretorioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDiretorioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDiretorioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDiretorioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdSistemasDiretorioInaderentePost()` */
  static readonly ApiDiretorIdSistemasDiretorioInaderentePostPath = '/api/Diretor/{id}/sistemas/diretorio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDiretorioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDiretorioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDiretorioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdSistemasDiretorioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdSistemasDiretorioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdSistemasDiretorioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiDiretorIdSistemasDiretorioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresImprodutividadeAderentePost()` */
  static readonly ApiDiretorIdOfensoresImprodutividadeAderentePostPath = '/api/Diretor/{id}/ofensores/improdutividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresImprodutividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresImprodutividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresImprodutividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresImprodutividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresImprodutividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresImprodutividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresImprodutividadeInaderentePost()` */
  static readonly ApiDiretorIdOfensoresImprodutividadeInaderentePostPath = '/api/Diretor/{id}/ofensores/improdutividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresImprodutividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresImprodutividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresImprodutividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresImprodutividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresImprodutividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresImprodutividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresImprodutividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresInatividadeAderentePost()` */
  static readonly ApiDiretorIdOfensoresInatividadeAderentePostPath = '/api/Diretor/{id}/ofensores/inatividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresInatividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresInatividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresInatividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresInatividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresInatividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresInatividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresInatividadeInaderentePost()` */
  static readonly ApiDiretorIdOfensoresInatividadeInaderentePostPath = '/api/Diretor/{id}/ofensores/inatividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresInatividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresInatividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresInatividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresInatividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresInatividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresInatividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresInatividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresSilencioAderentePost()` */
  static readonly ApiDiretorIdOfensoresSilencioAderentePostPath = '/api/Diretor/{id}/ofensores/silencio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresSilencioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresSilencioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresSilencioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresSilencioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresSilencioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresSilencioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresSilencioInaderentePost()` */
  static readonly ApiDiretorIdOfensoresSilencioInaderentePostPath = '/api/Diretor/{id}/ofensores/silencio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresSilencioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresSilencioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresSilencioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresSilencioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresSilencioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresSilencioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresSilencioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresAusenciaAderentePost()` */
  static readonly ApiDiretorIdOfensoresAusenciaAderentePostPath = '/api/Diretor/{id}/ofensores/ausencia-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresAusenciaAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresAusenciaAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresAusenciaAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresAusenciaAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresAusenciaAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresAusenciaAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdOfensoresAusenciaInaderentePost()` */
  static readonly ApiDiretorIdOfensoresAusenciaInaderentePostPath = '/api/Diretor/{id}/ofensores/ausencia-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresAusenciaInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresAusenciaInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresAusenciaInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdOfensoresAusenciaInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdOfensoresAusenciaInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdOfensoresAusenciaInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiDiretorIdOfensoresAusenciaInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDiretorIdProdutividadePost()` */
  static readonly ApiDiretorIdProdutividadePostPath = '/api/Diretor/{id}/produtividade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdProdutividadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdProdutividadePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdProdutividadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdProdutividadePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiDiretorIdProdutividadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiretorIdProdutividadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdProdutividadePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDiretorService.ApiDiretorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDiretorIdProdutividadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDiretorIdProdutividadePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiDiretorIdProdutividadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

}
