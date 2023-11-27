import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormActionDirective } from '@ngneat/error-tailor';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { PPasswordAutocompleteDirective } from '@app/directives/p-password-autocomplete.directive';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule,
    PPasswordAutocompleteDirective,
    RippleModule,
    FormActionDirective,
    CheckboxModule,
  ],
})
export class LoginModule {}
