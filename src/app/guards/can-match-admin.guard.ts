import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedUserService } from '@services/logged-user.service';
import { map } from 'rxjs';

export const canMatchAdminGuard = (onlyAdmin: boolean): CanMatchFn => {
  return (route, segments) => {
    const loggedUserService = inject(LoggedUserService);

    return loggedUserService.user$.pipe(
      map(user => {
        if ( !user ) {
          return false;
        }
        if ( onlyAdmin ) {
          return user?.admin ?? false;
        } else {
          return !user?.admin ?? false;
        }
      }),
    );
  }
};
