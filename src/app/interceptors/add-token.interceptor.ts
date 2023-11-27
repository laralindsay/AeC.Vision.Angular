import { HttpContextToken, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoggedUserService } from '@services/logged-user.service';
import { first, switchMap } from 'rxjs';

export const HTTP_CONTEXT_AUTH_TOKEN = new HttpContextToken<string | undefined>(() => undefined);

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const loggedUserService = inject(LoggedUserService);
  return loggedUserService.auth$.pipe(
    first(),
    switchMap(auth => {
      let token = auth?.accessToken ?? req.context.get(HTTP_CONTEXT_AUTH_TOKEN);

      if ( !token?.length ) {
        return next(req);
      }

      return next(req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      }));
    })
  );
};
