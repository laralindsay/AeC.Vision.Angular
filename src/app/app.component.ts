import { ActivatedRoute, Router } from '@angular/router';
import { Component, NgZone, OnInit, inject } from '@angular/core';
import { switchMap, take } from 'rxjs';

import { LoggedUserService } from '@services/logged-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly ngZone = inject(NgZone);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit() {
    this.listenLoggedUserStatusChanges();
  }

  private listenLoggedUserStatusChanges() {
    this.loggedUserService.onLogin$.pipe(
      switchMap(() => this.loggedUserService.user$.pipe(
        take(1)
      ))
    ).subscribe(user => {
      console.log('onLogin');
      this.ngZone.run(() => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        const isAdmin = user?.admin ?? false;
        const homeUrl = isAdmin ? '/admin' : '/main';
        this.router.navigate([returnUrl ?? homeUrl]);
      });
    });

    this.loggedUserService.onLogout$.subscribe(() => {
      console.log('onLogout');
      this.ngZone.run(() => {
        this.router.navigate(['/auth'], {
          state: {
            logout: true,
          },
        });
      });
    });
  }
}
