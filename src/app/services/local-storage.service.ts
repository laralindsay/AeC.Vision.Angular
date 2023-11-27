import { Injectable } from '@angular/core';
import { StateStorage } from '@ngneat/elf-persist-state/lib/storage';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public static storageStrategy: StateStorage = {
    getItem: async (key: string) => LocalStorageService.get<any>(key),
    setItem: async (key: string, value: any) => LocalStorageService.set<any>(key, value),
    removeItem: async (key: string) => LocalStorageService.remove(key),
  }

  public static set<T = any>(key: string, value: T) {
    const val = value && JSON.stringify(value);
    window.localStorage.setItem(key, val);
  }

  public static get<T>(key: string): T | undefined {
    const i = window.localStorage.getItem(key) ?? '';
    try {
      return JSON.parse(i) as T;
    } catch (_) {
      return undefined;
    }
  }

  public static remove(key: string) {
    window.localStorage.removeItem(key);
  }

  public static clear() {
    window.localStorage.clear();
  }


  public set<T = any>(key: string, value: T) {
    return LocalStorageService.set(key, value);
  }

  public get<T>(key: string) {
    return LocalStorageService.get<T>(key);
  }

  public remove(key: string) {
    return LocalStorageService.remove(key);
  }

  public clear() {
    return LocalStorageService.clear();
  }
}
