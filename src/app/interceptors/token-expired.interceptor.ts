import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '@services/toast.service';

export const tokenExpiredInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const toastService = inject(ToastService);

  return next(req).pipe(
    catchError(error => {
      if ( error.status === 401 && !req.url.endsWith('Token') ) {
        authService.logout();
        toastService.warn('Sessão expirada', 'Faça login novamente para continuar');
      }
      return throwError(error);
    })
  );
};
