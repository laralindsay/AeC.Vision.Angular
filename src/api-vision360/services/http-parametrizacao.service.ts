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

import { AmbienteViewModelHttp } from '../models/ambiente-view-model-http';
import { GrupoParametroSistemaViewModelHttp } from '../models/grupo-parametro-sistema-view-model-http';
import { NivelLogViewModelHttp } from '../models/nivel-log-view-model-http';
import { OperacaoViewModelHttp } from '../models/operacao-view-model-http';
import { ParametrizacaoViewModelHttp } from '../models/parametrizacao-view-model-http';
import { ParametrizacoesViewModelHttp } from '../models/parametrizacoes-view-model-http';
import { SegmentoViewModelHttp } from '../models/segmento-view-model-http';
import { SiteViewModelHttp } from '../models/site-view-model-http';
import { TipoParametrizacaoViewModelHttp } from '../models/tipo-parametrizacao-view-model-http';
import { VersaoViewModelHttp } from '../models/versao-view-model-http';

@Injectable({ providedIn: 'root' })
export class HttpParametrizacaoService extends Vision360ApiBaseService {
  constructor(config: Vision360ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiParametrizacaoTipoGet()` */
  static readonly ApiParametrizacaoTipoGetPath = '/api/Parametrizacao/tipo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoTipoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoTipoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoTipoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoTipoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoTipoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoParametrizacaoViewModelHttp>> {
    return this.apiParametrizacaoTipoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>): Array<TipoParametrizacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoTipoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoTipoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoTipoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoTipoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoTipoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<TipoParametrizacaoViewModelHttp>> {
    return this.apiParametrizacaoTipoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TipoParametrizacaoViewModelHttp>>): Array<TipoParametrizacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoNivelLogGet()` */
  static readonly ApiParametrizacaoNivelLogGetPath = '/api/Parametrizacao/nivelLog';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoNivelLogGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoNivelLogGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<NivelLogViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoNivelLogGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<NivelLogViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoNivelLogGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoNivelLogGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<NivelLogViewModelHttp>> {
    return this.apiParametrizacaoNivelLogGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NivelLogViewModelHttp>>): Array<NivelLogViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoNivelLogGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoNivelLogGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<NivelLogViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoNivelLogGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<NivelLogViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoNivelLogGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoNivelLogGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<NivelLogViewModelHttp>> {
    return this.apiParametrizacaoNivelLogGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<NivelLogViewModelHttp>>): Array<NivelLogViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoOperacaoGet()` */
  static readonly ApiParametrizacaoOperacaoGetPath = '/api/Parametrizacao/operacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoOperacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoOperacaoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoOperacaoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiParametrizacaoOperacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoOperacaoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiParametrizacaoOperacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoOperacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoOperacaoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<OperacaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoOperacaoGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiParametrizacaoOperacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoOperacaoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<OperacaoViewModelHttp>> {
    return this.apiParametrizacaoOperacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OperacaoViewModelHttp>>): Array<OperacaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoSegmentoGet()` */
  static readonly ApiParametrizacaoSegmentoGetPath = '/api/Parametrizacao/segmento';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSegmentoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSegmentoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSegmentoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiParametrizacaoSegmentoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSegmentoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiParametrizacaoSegmentoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSegmentoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSegmentoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SegmentoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSegmentoGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiParametrizacaoSegmentoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSegmentoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SegmentoViewModelHttp>> {
    return this.apiParametrizacaoSegmentoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SegmentoViewModelHttp>>): Array<SegmentoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoSiteGet()` */
  static readonly ApiParametrizacaoSiteGetPath = '/api/Parametrizacao/Site';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSiteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSiteGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SiteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSiteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SiteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoSiteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSiteGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SiteViewModelHttp>> {
    return this.apiParametrizacaoSiteGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SiteViewModelHttp>>): Array<SiteViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSiteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSiteGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SiteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSiteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SiteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoSiteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSiteGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<SiteViewModelHttp>> {
    return this.apiParametrizacaoSiteGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SiteViewModelHttp>>): Array<SiteViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoVersaoGet()` */
  static readonly ApiParametrizacaoVersaoGetPath = '/api/Parametrizacao/Versao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoVersaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoVersaoGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<VersaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoVersaoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VersaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoVersaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoVersaoGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<VersaoViewModelHttp>> {
    return this.apiParametrizacaoVersaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VersaoViewModelHttp>>): Array<VersaoViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoVersaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoVersaoGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<VersaoViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoVersaoGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VersaoViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoVersaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoVersaoGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<VersaoViewModelHttp>> {
    return this.apiParametrizacaoVersaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<VersaoViewModelHttp>>): Array<VersaoViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoAmbienteGet()` */
  static readonly ApiParametrizacaoAmbienteGetPath = '/api/Parametrizacao/Ambiente';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoAmbienteGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoAmbienteGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AmbienteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoAmbienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AmbienteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoAmbienteGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoAmbienteGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AmbienteViewModelHttp>> {
    return this.apiParametrizacaoAmbienteGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AmbienteViewModelHttp>>): Array<AmbienteViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoAmbienteGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoAmbienteGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AmbienteViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoAmbienteGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AmbienteViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoAmbienteGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoAmbienteGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<AmbienteViewModelHttp>> {
    return this.apiParametrizacaoAmbienteGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AmbienteViewModelHttp>>): Array<AmbienteViewModelHttp> => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoGet()` */
  static readonly ApiParametrizacaoGetPath = '/api/Parametrizacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoGet$Plain$Response(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacoesViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoGetPath, 'get');
    if (params) {
      rb.header('numeroPagina', params.numeroPagina, {});
      rb.header('tamanhoPagina', params.tamanhoPagina, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacoesViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoGet$Plain(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacoesViewModelHttp> {
    return this.apiParametrizacaoGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacoesViewModelHttp>): ParametrizacoesViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoGet$Json$Response(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacoesViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoGetPath, 'get');
    if (params) {
      rb.header('numeroPagina', params.numeroPagina, {});
      rb.header('tamanhoPagina', params.tamanhoPagina, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacoesViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoGet$Json(
    params?: {
      numeroPagina?: number;
      tamanhoPagina?: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacoesViewModelHttp> {
    return this.apiParametrizacaoGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacoesViewModelHttp>): ParametrizacoesViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoPost()` */
  static readonly ApiParametrizacaoPostPath = '/api/Parametrizacao';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoPost$Plain$Response(
    params?: {
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoPost$Plain(
    params?: {
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoPost$Json$Response(
    params?: {
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoPost$Json(
    params?: {
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoIdGet()` */
  static readonly ApiParametrizacaoIdGetPath = '/api/Parametrizacao/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoIdPut()` */
  static readonly ApiParametrizacaoIdPutPath = '/api/Parametrizacao/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoIdPut$Plain$Response(
    params: {
      id: number;
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoIdPut$Plain(
    params: {
      id: number;
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoIdPut$Json$Response(
    params: {
      id: number;
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametrizacaoIdPut$Json(
    params: {
      id: number;
      body?: ParametrizacaoViewModelHttp
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoIdDelete()` */
  static readonly ApiParametrizacaoIdDeletePath = '/api/Parametrizacao/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdDelete$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdDelete$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdDelete$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ParametrizacaoViewModelHttp>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametrizacaoViewModelHttp>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoIdDelete$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<ParametrizacaoViewModelHttp> {
    return this.apiParametrizacaoIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParametrizacaoViewModelHttp>): ParametrizacaoViewModelHttp => r.body)
    );
  }

  /** Path part for operation `apiParametrizacaoSistemasGet()` */
  static readonly ApiParametrizacaoSistemasGetPath = '/api/Parametrizacao/sistemas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSistemasGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSistemasGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSistemasGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoSistemasGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSistemasGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<GrupoParametroSistemaViewModelHttp>> {
    return this.apiParametrizacaoSistemasGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>): Array<GrupoParametroSistemaViewModelHttp> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametrizacaoSistemasGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSistemasGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>> {
    const rb = new Vision360ApiRequestBuilder(this.rootUrl, HttpParametrizacaoService.ApiParametrizacaoSistemasGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametrizacaoSistemasGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametrizacaoSistemasGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<GrupoParametroSistemaViewModelHttp>> {
    return this.apiParametrizacaoSistemasGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GrupoParametroSistemaViewModelHttp>>): Array<GrupoParametroSistemaViewModelHttp> => r.body)
    );
  }

}
