import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedUserService } from '@services/logged-user.service';
import { map, switchMap, take } from 'rxjs';

export const onlyNotLoggedGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  const loggedUserService = inject(LoggedUserService);
  const router = inject(Router);

  return loggedUserService.isLoggedIn$.pipe(
    switchMap(isLoggedIn => loggedUserService.user$.pipe(
      take(1),
      map(user => ({ isLoggedIn, user })),
    )),
    map(({ isLoggedIn, user }) => {
      if ( isLoggedIn ) {
        if ( user?.admin ) {
          return router.createUrlTree(['/admin']);
        }
        return router.createUrlTree(['/main']);
      }
      return true;
    })
  );
};
