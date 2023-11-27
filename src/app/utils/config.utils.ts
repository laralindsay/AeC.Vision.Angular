import { ENVIRONMENT_INITIALIZER } from '@angular/core';

export const provideInitEffect = (fn: () => void) => {
  return {
    multi: true,
    provide: ENVIRONMENT_INITIALIZER,
    useValue: fn,
  };
}
