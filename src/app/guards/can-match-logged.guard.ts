import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoggedUserService } from '@services/logged-user.service';
import { map } from 'rxjs';

export const canMatchLoggedGuard = (logged: boolean): CanMatchFn => {
  return (route, segments) => {
    const loggedUserService = inject(LoggedUserService);

    return loggedUserService.isLoggedIn$.pipe(
      map(loggedIn => loggedIn === logged)
    );
  }
}
