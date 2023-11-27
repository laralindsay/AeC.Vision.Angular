import { Component, inject } from '@angular/core';
import { ThemesEnum, ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  private readonly themeService = inject(ThemeService);

  constructor() {
    this.themeService.setTheme(ThemesEnum.ADMIN);
  }

  ngOnDestroy(): void {
    this.themeService.setTheme(ThemesEnum.MAIN);
  }
}
