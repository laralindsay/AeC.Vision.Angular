import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly document = inject(DOCUMENT);

  setTheme(theme: ThemesEnum) {
    const root = this.document.querySelector(':root') as HTMLElement;
    const rootStyles = getComputedStyle(root);

    const primary = rootStyles.getPropertyValue('--default-theme-primary');
    const primaryRgb = rootStyles.getPropertyValue('--default-theme-primary-rgb');
    const secondary = rootStyles.getPropertyValue('--default-theme-secondary');
    const secondaryRgb = rootStyles.getPropertyValue('--default-theme-secondary-rgb');

    const primeNgThemeLink = this.document.getElementById('app-primeng-theme') as HTMLLinkElement;

    if ( theme === ThemesEnum.MAIN ) {
      primeNgThemeLink.href = 'primeng.css';
      root.style.setProperty('--theme-primary', primary);
      root.style.setProperty('--theme-primary-rgb', primaryRgb);
      root.style.setProperty('--theme-secondary', secondary);
      root.style.setProperty('--theme-secondary-rgb', secondaryRgb);
    }
    else {
      primeNgThemeLink.href = 'primeng-admin.css';
      root.style.setProperty('--theme-primary', secondary);
      root.style.setProperty('--theme-primary-rgb', secondaryRgb);
      root.style.setProperty('--theme-secondary', primary);
      root.style.setProperty('--theme-secondary-rgb', primaryRgb);
    }

    root.style.setProperty('--bs-primary', 'var(--theme-primary)');
    root.style.setProperty('--bs-primary-rgb', 'var(--theme-primary-rgb)');
    root.style.setProperty('--bs-secondary', 'var(--theme-secondary)');
    root.style.setProperty('--bs-secondary-rgb', 'var(--theme-secondary-rgb)');
  }
}

export enum ThemesEnum {
  MAIN,
  ADMIN,
}
