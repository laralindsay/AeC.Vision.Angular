import { createStore, getRegistry, select, withProps } from '@ngneat/elf';
import { debounceTime, distinctUntilChanged, filter, map, pairwise, shareReplay } from 'rxjs';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

import { DateTime } from "luxon";
import { Injectable } from '@angular/core';
import { syncState } from 'elf-sync-state';

const loggedUserStore = createStore(
  { name: 'logged-user' },
  withProps<LoggedUserState>({
    auth: undefined,
    user: undefined,
    preferences: undefined,
  }),
);
persistState(loggedUserStore, {
  key: 'logged-user',
  storage: localStorageStrategy,
  source: () => loggedUserStore.pipe(debounceTime(800)),
});
syncState(loggedUserStore);


@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  private readonly store = loggedUserStore;
  private readonly storeData$ = this.store.pipe(
    map(store => {
      if ( store?.auth?.accessToken?.length && store?.auth?.expiration?.length ) {
        const expirationDate = DateTime.fromSQL(store?.auth?.expiration);
        if ( expirationDate > DateTime.now() ) {
          return store;
        }
      }
      return undefined;
    }),
    shareReplay(1),
  );

  auth$ = this.storeData$.pipe(select(x => x?.auth));
  user$ = this.storeData$.pipe(select(x => x?.user));
  preferences$ = this.storeData$.pipe(select(x => x?.preferences));

  isAdmin$ = this.user$.pipe(
    select(x => x?.admin),
  );

  isLoggedIn$ = this.storeData$.pipe(
    map(isLoggedIn => !!isLoggedIn),
    distinctUntilChanged(),
  );

  onLogin$ = this.isLoggedIn$.pipe(
    pairwise(),
    map(([wasLoggedIn, isLoggedIn]) => !wasLoggedIn && isLoggedIn),
    distinctUntilChanged(),
    filter(isLoggedIn => !!isLoggedIn),
  );

  onLogout$ = this.isLoggedIn$.pipe(
    pairwise(),
    map(([wasLoggedIn, isLoggedIn]) => wasLoggedIn && !isLoggedIn),
    distinctUntilChanged(),
    filter(wasLoggedIn => !!wasLoggedIn),
  );

  clear() {
    // clear all stores
    getRegistry().forEach(store => store.reset());
  }

  setData(data: LoggedUserState) {
    this.store.update(state => ({ ...state, ...data }));
  }
  updateData(data: Partial<LoggedUserState>) {
    this.store.update(state => ({ ...state, ...data }));
  }

  setAuthData(authData: AuthState) {
    this.store.update(state => ({ ...state, auth: authData }));
  }
  updateAuthData(authData: Partial<AuthState>) {
    this.store.update(state => ({ ...state, auth: { ...authData } }));
  }

  setUserData(userData: UserState) {
    this.store.update(state => ({ ...state, user: userData }));
  }
  updateUserData(userData: Partial<UserState>) {
    this.store.update(state => ({ ...state, user: { ...userData } }));
  }

  setPreferencesData(preferencesData: PreferencesState) {
    this.store.update(state => ({ ...state, preferences: preferencesData }));
  }
  updatePreferencesData(preferencesData: Partial<PreferencesState>) {
    this.store.update(state => ({ ...state, preferences: { ...preferencesData } }));
  }
}

export interface LoggedUserState {
  auth?: AuthState;
  user?: UserState;
  preferences?: PreferencesState;
}

export interface UserState {
  username?: string;
  admin?: boolean;

  id?: number;
  nome?: string | null;
  matricula?: string | null;
  idPerfil?: ProfileEnum | null;
  loginRede?: string | null;

  perfil?: {
    nome?: string | null;
  } | null;
}

export interface AuthState {
  accessToken?: string;
  refreshToken?: string;
  expiration?: string;
  creation?: string;
}

export interface PreferencesState {
  menuExpanded?: boolean;
}

export enum ProfileEnum {
  Operador,
  Supervisor,
  Coordenador,
  Gerente,
  GerenteExecutivo,
  Diretor,
  Administrador,
}
