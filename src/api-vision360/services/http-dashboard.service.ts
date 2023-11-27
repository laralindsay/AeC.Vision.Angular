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

import { DashboardCriteriaHttp } from '../models/dashboard-criteria-http';
import { IndicadorAderenciaViewModelHttp } from '../models/indicador-aderencia-view-model-http';
import { IndicadorModelHttp } from '../models/indicador-model-http';
import { OperacaoViewModelHttp } from '../models/operacao-view-model-http';
import { PacoteHierarquiaViewModelHttp } from '../models/pacote-hierarquia-view-model-http';
import { SegmentoViewModelHttp } from '../models/segmento-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpDashboardService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiDashboardOperacaoGet()` */
  static readonly ApiDashboardOperacaoGetPath = '/api/Dashboard/operacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOperacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOperacaoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardOperacaoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiDashboardOperacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOperacaoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiDashboardOperacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardOperacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOperacaoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardOperacaoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiDashboardOperacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardOperacaoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiDashboardOperacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDashboardSegmentoGet()` */
  static readonly ApiDashboardSegmentoGetPath = '/api/Dashboard/segmento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardSegmentoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardSegmentoGet$Plain$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
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
   * To access the full response (for headers, for example), `apiDashboardSegmentoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardSegmentoGet$Plain(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiDashboardSegmentoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardSegmentoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardSegmentoGet$Json$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardSegmentoGetPath, 'get');
    if (params) {
      rb.query('idOperacao', params.idOperacao, {});
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
   * To access the full response (for headers, for example), `apiDashboardSegmentoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDashboardSegmentoGet$Json(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiDashboardSegmentoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDashboardAderenciaPost()` */
  static readonly ApiDashboardAderenciaPostPath = '/api/Dashboard/aderencia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAderenciaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAderenciaPost$Plain$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardAderenciaPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `apiDashboardAderenciaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAderenciaPost$Plain(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiDashboardAderenciaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardAderenciaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAderenciaPost$Json$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<IndicadorAderenciaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardAderenciaPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `apiDashboardAderenciaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardAderenciaPost$Json(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<IndicadorAderenciaViewModelHttp> {
    return this.apiDashboardAderenciaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<IndicadorAderenciaViewModelHttp>): IndicadorAderenciaViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiDashboardIndicadoresPost()` */
  static readonly ApiDashboardIndicadoresPostPath = '/api/Dashboard/indicadores';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardIndicadoresPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardIndicadoresPost$Plain$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardIndicadoresPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IndicadorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardIndicadoresPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardIndicadoresPost$Plain(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorModelHttp>> {
    return this.apiDashboardIndicadoresPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorModelHttp>>): Array<IndicadorModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardIndicadoresPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardIndicadoresPost$Json$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<IndicadorModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardIndicadoresPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<IndicadorModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDashboardIndicadoresPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardIndicadoresPost$Json(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<Array<IndicadorModelHttp>> {
    return this.apiDashboardIndicadoresPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<IndicadorModelHttp>>): Array<IndicadorModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiDashboardHierarquiaPost()` */
  static readonly ApiDashboardHierarquiaPostPath = '/api/Dashboard/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardHierarquiaPost$Plain$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDashboardHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardHierarquiaPost$Plain(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDashboardHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDashboardHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardHierarquiaPost$Json$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpDashboardService.ApiDashboardHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiDashboardHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDashboardHierarquiaPost$Json(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiDashboardHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

}
