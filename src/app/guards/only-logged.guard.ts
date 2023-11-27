import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedUserService } from '@services/logged-user.service';
import { map } from 'rxjs';

export const onlyLoggedGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const loggedUserService = inject(LoggedUserService);
  const router = inject(Router);

  return loggedUserService.isLoggedIn$.pipe(
    map(loggedIn => {
      if ( loggedIn ) {
        return true;
      }
      return router.createUrlTree(['/auth/login'], {
        queryParams: {
          returnUrl: state?.url
        }
      })
    })
  );
};
