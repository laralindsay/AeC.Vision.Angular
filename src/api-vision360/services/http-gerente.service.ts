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
export class HttpGerenteService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiGerenteHierarquiaPost()` */
  static readonly ApiGerenteHierarquiaPostPath = '/api/Gerente/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteHierarquiaPost$Plain$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteHierarquiaPost$Plain(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiGerenteHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteHierarquiaPost$Json$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteHierarquiaPost$Json(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiGerenteHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdHierarquiaPost()` */
  static readonly ApiGerenteIdHierarquiaPostPath = '/api/Gerente/{id}/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdHierarquiaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdHierarquiaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiGerenteIdHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdHierarquiaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdHierarquiaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiGerenteIdHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdAderenciaPost()` */
  static readonly ApiGerenteIdAderenciaPostPath = '/api/Gerente/{id}/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdAderenciaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdAderenciaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiGerenteIdAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdAderenciaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdAderenciaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiGerenteIdAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdIndicadoresPost()` */
  static readonly ApiGerenteIdIndicadoresPostPath = '/api/Gerente/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdIndicadoresPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdIndicadoresPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiGerenteIdIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdIndicadoresPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdIndicadoresPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiGerenteIdIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdChamadasPost()` */
  static readonly ApiGerenteIdChamadasPostPath = '/api/Gerente/{id}/chamadas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiGerenteIdChamadasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiGerenteIdChamadasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdChamadasAnaliticoPost()` */
  static readonly ApiGerenteIdChamadasAnaliticoPostPath = '/api/Gerente/id/chamadas-analitico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasAnaliticoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPost$Plain$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasAnaliticoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPost$Plain(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiGerenteIdChamadasAnaliticoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasAnaliticoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPost$Json$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasAnaliticoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPost$Json(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiGerenteIdChamadasAnaliticoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdChamadasAnaliticoCsvPost()` */
  static readonly ApiGerenteIdChamadasAnaliticoCsvPostPath = '/api/Gerente/id/chamadas-analitico/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasAnaliticoCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoCsvPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasAnaliticoCsvPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasAnaliticoCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoCsvPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiGerenteIdChamadasAnaliticoCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdChamadasAnaliticoPdfPost()` */
  static readonly ApiGerenteIdChamadasAnaliticoPdfPostPath = '/api/Gerente/id/chamadas-analitico/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdChamadasAnaliticoPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPdfPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdChamadasAnaliticoPdfPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdChamadasAnaliticoPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdChamadasAnaliticoPdfPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiGerenteIdChamadasAnaliticoPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasWebAderentePost()` */
  static readonly ApiGerenteIdSistemasWebAderentePostPath = '/api/Gerente/{id}/sistemas/web-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasWebAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasWebAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasWebAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasWebAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasWebAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasWebAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasWebInaderentePost()` */
  static readonly ApiGerenteIdSistemasWebInaderentePostPath = '/api/Gerente/{id}/sistemas/web-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasWebInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasWebInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasWebInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasWebInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasWebInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasWebInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasWebInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasDesktopAderentePost()` */
  static readonly ApiGerenteIdSistemasDesktopAderentePostPath = '/api/Gerente/{id}/sistemas/desktop-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDesktopAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDesktopAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDesktopAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDesktopAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDesktopAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDesktopAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasDesktopInaderentePost()` */
  static readonly ApiGerenteIdSistemasDesktopInaderentePostPath = '/api/Gerente/{id}/sistemas/desktop-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDesktopInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDesktopInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDesktopInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDesktopInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDesktopInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDesktopInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDesktopInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasDiretorioAderentePost()` */
  static readonly ApiGerenteIdSistemasDiretorioAderentePostPath = '/api/Gerente/{id}/sistemas/diretorio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDiretorioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDiretorioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDiretorioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDiretorioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDiretorioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDiretorioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdSistemasDiretorioInaderentePost()` */
  static readonly ApiGerenteIdSistemasDiretorioInaderentePostPath = '/api/Gerente/{id}/sistemas/diretorio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDiretorioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDiretorioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDiretorioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdSistemasDiretorioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdSistemasDiretorioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdSistemasDiretorioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiGerenteIdSistemasDiretorioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresImprodutividadeAderentePost()` */
  static readonly ApiGerenteIdOfensoresImprodutividadeAderentePostPath = '/api/Gerente/{id}/ofensores/improdutividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresImprodutividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresImprodutividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresImprodutividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresImprodutividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresImprodutividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresImprodutividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresImprodutividadeInaderentePost()` */
  static readonly ApiGerenteIdOfensoresImprodutividadeInaderentePostPath = '/api/Gerente/{id}/ofensores/improdutividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresImprodutividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresImprodutividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresImprodutividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresImprodutividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresImprodutividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresImprodutividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresImprodutividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresInatividadeAderentePost()` */
  static readonly ApiGerenteIdOfensoresInatividadeAderentePostPath = '/api/Gerente/{id}/ofensores/inatividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresInatividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresInatividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresInatividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresInatividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresInatividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresInatividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresInatividadeInaderentePost()` */
  static readonly ApiGerenteIdOfensoresInatividadeInaderentePostPath = '/api/Gerente/{id}/ofensores/inatividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresInatividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresInatividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresInatividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresInatividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresInatividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresInatividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresInatividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresSilencioAderentePost()` */
  static readonly ApiGerenteIdOfensoresSilencioAderentePostPath = '/api/Gerente/{id}/ofensores/silencio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresSilencioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresSilencioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresSilencioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresSilencioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresSilencioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresSilencioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresSilencioInaderentePost()` */
  static readonly ApiGerenteIdOfensoresSilencioInaderentePostPath = '/api/Gerente/{id}/ofensores/silencio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresSilencioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresSilencioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresSilencioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresSilencioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresSilencioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresSilencioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresSilencioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresAusenciaAderentePost()` */
  static readonly ApiGerenteIdOfensoresAusenciaAderentePostPath = '/api/Gerente/{id}/ofensores/ausencia-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresAusenciaAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresAusenciaAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresAusenciaAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresAusenciaAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresAusenciaAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresAusenciaAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdOfensoresAusenciaInaderentePost()` */
  static readonly ApiGerenteIdOfensoresAusenciaInaderentePostPath = '/api/Gerente/{id}/ofensores/ausencia-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresAusenciaInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresAusenciaInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresAusenciaInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdOfensoresAusenciaInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdOfensoresAusenciaInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdOfensoresAusenciaInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiGerenteIdOfensoresAusenciaInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiGerenteIdProdutividadePost()` */
  static readonly ApiGerenteIdProdutividadePostPath = '/api/Gerente/{id}/produtividade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdProdutividadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdProdutividadePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdProdutividadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdProdutividadePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiGerenteIdProdutividadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGerenteIdProdutividadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdProdutividadePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpGerenteService.ApiGerenteIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGerenteIdProdutividadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGerenteIdProdutividadePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiGerenteIdProdutividadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

}
