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
import { OperacaoViewModelHttp } from '../models/operacao-view-model-http';
import { PacoteHierarquiaViewModelHttp } from '../models/pacote-hierarquia-view-model-http';
import { SegmentoViewModelHttp } from '../models/segmento-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpAdministradorService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdministradorOperacaoGet()` */
  static readonly ApiAdministradorOperacaoGetPath = '/api/Administrador/operacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorOperacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorOperacaoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorOperacaoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdministradorOperacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorOperacaoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiAdministradorOperacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorOperacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorOperacaoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorOperacaoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdministradorOperacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorOperacaoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiAdministradorOperacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAdministradorSegmentoGet()` */
  static readonly ApiAdministradorSegmentoGetPath = '/api/Administrador/segmento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorSegmentoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorSegmentoGet$Plain$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorSegmentoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdministradorSegmentoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorSegmentoGet$Plain(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiAdministradorSegmentoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorSegmentoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorSegmentoGet$Json$Response(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorSegmentoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiAdministradorSegmentoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdministradorSegmentoGet$Json(
    params?: {
      idOperacao?: number;
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiAdministradorSegmentoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiAdministradorHierarquiaPost()` */
  static readonly ApiAdministradorHierarquiaPostPath = '/api/Administrador/hierarquia';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorHierarquiaPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdministradorHierarquiaPost$Plain$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdministradorHierarquiaPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdministradorHierarquiaPost$Plain(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiAdministradorHierarquiaPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdministradorHierarquiaPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdministradorHierarquiaPost$Json$Response(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PacoteHierarquiaViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpAdministradorService.ApiAdministradorHierarquiaPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdministradorHierarquiaPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdministradorHierarquiaPost$Json(
    params?: {
      body?: DashboardCriteriaHttp
    },
    context?: HttpContext
  ): Observable<PacoteHierarquiaViewModelHttp> {
    return this.apiAdministradorHierarquiaPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PacoteHierarquiaViewModelHttp>): PacoteHierarquiaViewModelHttp => r.body)
    );
  }

}
