import { HttpClient, HttpParams } from '@angular/common/http';

import { inject } from '@angular/core';

export abstract class BaseHttpService {
  protected abstract readonly ENDPOINT: string;
  protected readonly http = inject(HttpClient);

  protected getBaseUrl() {
   return 'https://sophia/AeC.WebServices.Vision360.Portal';
  }

  protected getUrl(...args: Array<string | number | object>) {
    return [
      this.getBaseUrl(),
      this.ENDPOINT,
      ...args
    ].map(x => {
      if (typeof x === 'string' || typeof x === 'number') {
        return x?.toString();
      }
      const h = HttpParams;
      const httpParams = new HttpParams({ fromObject: x as any });
      return httpParams.toString();
    }).filter(x => x.length)
      .join('/');
  }
}
