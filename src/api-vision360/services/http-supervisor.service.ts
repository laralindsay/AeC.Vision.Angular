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
export class HttpSupervisorService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiSupervisorHierarquiaPost()` */
  static readonly ApiSupervisorHierarquiaPostPath = '/api/Supervisor/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorHierarquiaPost$Plain$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorHierarquiaPost$Plain(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiSupervisorHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorHierarquiaPost$Json$Response(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorHierarquiaPost$Json(
    params?: {
      body?: HierarquiaCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiSupervisorHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdHierarquiaPost()` */
  static readonly ApiSupervisorIdHierarquiaPostPath = '/api/Supervisor/{id}/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdHierarquiaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdHierarquiaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiSupervisorIdHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdHierarquiaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdHierarquiaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiSupervisorIdHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdAderenciaPost()` */
  static readonly ApiSupervisorIdAderenciaPostPath = '/api/Supervisor/{id}/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdAderenciaPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdAderenciaPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiSupervisorIdAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdAderenciaPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdAderenciaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdAderenciaPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiSupervisorIdAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdIndicadoresPost()` */
  static readonly ApiSupervisorIdIndicadoresPostPath = '/api/Supervisor/{id}/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdIndicadoresPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdIndicadoresPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiSupervisorIdIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdIndicadoresPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdIndicadoresPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdIndicadoresPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorViewModelHttp>> {
    return this.apiSupervisorIdIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorViewModelHttp>>): Array<IndicadorViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdChamadasPost()` */
  static readonly ApiSupervisorIdChamadasPostPath = '/api/Supervisor/{id}/chamadas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasPost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasPost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiSupervisorIdChamadasPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasPost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasPost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorViewModelHttp> {
    return this.apiSupervisorIdChamadasPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorViewModelHttp>): IndicadorViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdChamadasAnaliticoPost()` */
  static readonly ApiSupervisorIdChamadasAnaliticoPostPath = '/api/Supervisor/id/chamadas-analitico';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasAnaliticoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPost$Plain$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasAnaliticoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPost$Plain(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiSupervisorIdChamadasAnaliticoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasAnaliticoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPost$Json$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteLigacaoModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasAnaliticoPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasAnaliticoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPost$Json(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<PacoteLigacaoModelHttp> {
    return this.apiSupervisorIdChamadasAnaliticoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteLigacaoModelHttp>): PacoteLigacaoModelHttp => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdChamadasAnaliticoCsvPost()` */
  static readonly ApiSupervisorIdChamadasAnaliticoCsvPostPath = '/api/Supervisor/id/chamadas-analitico/csv';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasAnaliticoCsvPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoCsvPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasAnaliticoCsvPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasAnaliticoCsvPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoCsvPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSupervisorIdChamadasAnaliticoCsvPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdChamadasAnaliticoPdfPost()` */
  static readonly ApiSupervisorIdChamadasAnaliticoPdfPostPath = '/api/Supervisor/id/chamadas-analitico/pdf';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdChamadasAnaliticoPdfPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPdfPost$Response(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdChamadasAnaliticoPdfPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdChamadasAnaliticoPdfPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdChamadasAnaliticoPdfPost(
    params?: {
      id?: number;
      body?: ChamadaRequestViewModelHttp
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiSupervisorIdChamadasAnaliticoPdfPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasWebAderentePost()` */
  static readonly ApiSupervisorIdSistemasWebAderentePostPath = '/api/Supervisor/{id}/sistemas/web-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasWebAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasWebAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasWebAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasWebAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasWebAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasWebAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasWebAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasWebInaderentePost()` */
  static readonly ApiSupervisorIdSistemasWebInaderentePostPath = '/api/Supervisor/{id}/sistemas/web-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasWebInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasWebInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasWebInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasWebInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasWebInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasWebInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasWebInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasWebInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasDesktopAderentePost()` */
  static readonly ApiSupervisorIdSistemasDesktopAderentePostPath = '/api/Supervisor/{id}/sistemas/desktop-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDesktopAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDesktopAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDesktopAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDesktopAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDesktopAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDesktopAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDesktopAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasDesktopInaderentePost()` */
  static readonly ApiSupervisorIdSistemasDesktopInaderentePostPath = '/api/Supervisor/{id}/sistemas/desktop-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDesktopInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDesktopInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDesktopInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDesktopInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDesktopInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDesktopInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDesktopInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDesktopInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasDiretorioAderentePost()` */
  static readonly ApiSupervisorIdSistemasDiretorioAderentePostPath = '/api/Supervisor/{id}/sistemas/diretorio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDiretorioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDiretorioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDiretorioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDiretorioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDiretorioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDiretorioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDiretorioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdSistemasDiretorioInaderentePost()` */
  static readonly ApiSupervisorIdSistemasDiretorioInaderentePostPath = '/api/Supervisor/{id}/sistemas/diretorio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDiretorioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDiretorioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDiretorioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdSistemasDiretorioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SistemaModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdSistemasDiretorioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdSistemasDiretorioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdSistemasDiretorioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<SistemaModelHttp>> {
    return this.apiSupervisorIdSistemasDiretorioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SistemaModelHttp>>): Array<SistemaModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresImprodutividadeAderentePost()` */
  static readonly ApiSupervisorIdOfensoresImprodutividadeAderentePostPath = '/api/Supervisor/{id}/ofensores/improdutividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresImprodutividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresImprodutividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresImprodutividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresImprodutividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresImprodutividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresImprodutividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresImprodutividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresImprodutividadeInaderentePost()` */
  static readonly ApiSupervisorIdOfensoresImprodutividadeInaderentePostPath = '/api/Supervisor/{id}/ofensores/improdutividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresImprodutividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresImprodutividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresImprodutividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresImprodutividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresImprodutividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresImprodutividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresImprodutividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresImprodutividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresInatividadeAderentePost()` */
  static readonly ApiSupervisorIdOfensoresInatividadeAderentePostPath = '/api/Supervisor/{id}/ofensores/inatividade-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresInatividadeAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresInatividadeAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresInatividadeAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresInatividadeAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresInatividadeAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresInatividadeAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresInatividadeAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresInatividadeInaderentePost()` */
  static readonly ApiSupervisorIdOfensoresInatividadeInaderentePostPath = '/api/Supervisor/{id}/ofensores/inatividade-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresInatividadeInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresInatividadeInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresInatividadeInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresInatividadeInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresInatividadeInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresInatividadeInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresInatividadeInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresInatividadeInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresSilencioAderentePost()` */
  static readonly ApiSupervisorIdOfensoresSilencioAderentePostPath = '/api/Supervisor/{id}/ofensores/silencio-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresSilencioAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresSilencioAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresSilencioAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresSilencioAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresSilencioAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresSilencioAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresSilencioAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresSilencioInaderentePost()` */
  static readonly ApiSupervisorIdOfensoresSilencioInaderentePostPath = '/api/Supervisor/{id}/ofensores/silencio-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresSilencioInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresSilencioInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresSilencioInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresSilencioInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresSilencioInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresSilencioInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresSilencioInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresSilencioInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresAusenciaAderentePost()` */
  static readonly ApiSupervisorIdOfensoresAusenciaAderentePostPath = '/api/Supervisor/{id}/ofensores/ausencia-aderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresAusenciaAderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaAderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresAusenciaAderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaAderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresAusenciaAderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresAusenciaAderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaAderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresAusenciaAderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresAusenciaAderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaAderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresAusenciaAderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdOfensoresAusenciaInaderentePost()` */
  static readonly ApiSupervisorIdOfensoresAusenciaInaderentePostPath = '/api/Supervisor/{id}/ofensores/ausencia-inaderente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresAusenciaInaderentePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaInaderentePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresAusenciaInaderentePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaInaderentePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresAusenciaInaderentePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdOfensoresAusenciaInaderentePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaInaderentePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OfensorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdOfensoresAusenciaInaderentePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdOfensoresAusenciaInaderentePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdOfensoresAusenciaInaderentePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<OfensorModelHttp>> {
    return this.apiSupervisorIdOfensoresAusenciaInaderentePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OfensorModelHttp>>): Array<OfensorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiSupervisorIdProdutividadePost()` */
  static readonly ApiSupervisorIdProdutividadePostPath = '/api/Supervisor/{id}/produtividade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdProdutividadePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdProdutividadePost$Plain$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdProdutividadePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdProdutividadePost$Plain(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiSupervisorIdProdutividadePost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSupervisorIdProdutividadePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdProdutividadePost$Json$Response(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteProdutividadeModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpSupervisorService.ApiSupervisorIdProdutividadePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSupervisorIdProdutividadePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSupervisorIdProdutividadePost$Json(
    params: {
      id: number;
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteProdutividadeModelHttp> {
    return this.apiSupervisorIdProdutividadePost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteProdutividadeModelHttp>): PacoteProdutividadeModelHttp => r.body)
    );
  }

}
