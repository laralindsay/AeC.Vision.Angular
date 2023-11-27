import { NgModule } from '@angular/core';
import { provideErrorTailorConfig } from '@ngneat/error-tailor';

@NgModule({
  providers: [
    provideErrorTailorConfig({
      errors: {
        useValue: {
          required: 'Campo obrigatório',
          minlength: ({ requiredLength, actualLength }) => `Mínimo ${requiredLength} caracteres. Atual: ${actualLength}`,
        }
      }
    })
  ]
})
export class ErrorTailorConfigModule { }
