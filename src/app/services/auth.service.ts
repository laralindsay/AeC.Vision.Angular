import { Injectable, inject } from '@angular/core';
import { catchError, map, switchMap, tap } from 'rxjs';

import { HttpTokenService, HttpUsuarioService } from 'src/api-vision360/services';
import { LoggedUserService } from '@services/logged-user.service';
import { HTTP_CONTEXT_AUTH_TOKEN } from "@app/interceptors/add-token.interceptor";
import { HttpContext } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly httpTokenService = inject(HttpTokenService);
  private readonly httpUsuarioService = inject(HttpUsuarioService);

  login(data: LoginData) {
    return this.httpTokenService
      .apiTokenPost({
        body: {
          grantType: 'password',
          password: data?.password,
          userID: data?.userID,
          refreshToken: '',
        },
      })
      .pipe(
        map((response: any) => JSON.parse(response) as LoginResponse),
        switchMap(auth => {
          const context = new HttpContext()
            .set(HTTP_CONTEXT_AUTH_TOKEN, auth.accessToken);

          return this.httpUsuarioService.apiUsuarioUsuarioLogadoGet$Json({}, context).pipe(
            tap(user => {
              this.loggedUserService.setData({
                auth,
                user: {
                  admin: user?.perfil?.nome === 'ADMINISTRADOR',
                  ...user,
                },
              });
            }),
          );
        }),
        catchError((error) => {
          throw {
            ...error,
            customMessage:
              typeof error?.error === 'string' ? error?.error : undefined,
          };
        })
      );
  }

  logout() {
    this.loggedUserService.clear();
  }
}

interface LoginData {
  userID?: string;
  password?: string;
  admin?: boolean;
}

interface LoginResponse {
  accessToken?: string;
  created?: string;
  expiration?: string;
  refreshToken?: string;
}
