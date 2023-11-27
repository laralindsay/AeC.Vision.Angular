import { ApiConfigModule } from '@app/configs/api-config.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationConfigModule } from '@app/configs/confirmation-config.module';
import { ErrorTailorConfigModule } from '@app/configs/error-tailor-config.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'
import { LanguageConfigModule } from '@app/configs/language-config.module';
import { NgModule } from '@angular/core';
import { PrimengFiltersConfigModule } from '@app/configs/primeng-filters-config.module';
import { RouterModule } from '@angular/router';
import { ToastConfigModule } from '@app/configs/toast-config.module';
import { addTokenInterceptor } from './interceptors/add-token.interceptor';
import { tokenExpiredInterceptor } from './interceptors/token-expired.interceptor';
import { ChartjsConfigModule } from "@app/configs/chartjs-config.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmationConfigModule,
    LanguageConfigModule,
    PrimengFiltersConfigModule,
    ToastConfigModule,
    ErrorTailorConfigModule,
    ApiConfigModule,
    ChartjsConfigModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        addTokenInterceptor,
        tokenExpiredInterceptor
      ])
    )
  ],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
