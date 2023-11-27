/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class Vision360ApiConfiguration {
  rootUrl: string = '/AeC.WebServices.Vision360.Portal';
}

/**
 * Parameters for `Vision360ApiModule.forRoot()`
 */
export interface Vision360ApiConfigurationParams {
  rootUrl?: string;
}
