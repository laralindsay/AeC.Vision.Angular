import { BaseHttpService } from '@app/http/base.http-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService extends BaseHttpService {
  protected readonly ENDPOINT = '';

  login(usuario: LoginRequest) {
    return this.http.post<LoginResponse>(this.getUrl('api/Token'), {
      userID: usuario?.userID,
      password: usuario?.password,
      grantType: 'password',
      refreshToken: '',
    });
  }
}

export interface LoginRequest {
  userID?: string;
  password?: string;
}

export interface LoginResponse {
  "nome"?: string,
  "nomeGestorImediato"?: string,
  "matricula"?: string,
  "coligada"?: string,
  "segmentos"?: [],
  "secao"?: null,
  "operacao"?: {
    "operacaoID"?: number,
    "gerenciaOperacaoSecao"?: string,
    "siteSecao"?: string,
    "cR"?: string,
    "descricaoCR"?: string,
  }
}
