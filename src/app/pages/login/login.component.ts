import { Component, inject } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '@app/services/auth.service';
import { LoadingService } from "@app/services/loading.service";
import { ToastService } from "@app/services/toast.service";
import { finalize } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  private readonly toastService = inject(ToastService);
  private readonly authService = inject(AuthService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly loadingService = inject(LoadingService);

  isLoading = false;
  form = this.formBuilder.nonNullable.group({
    userID: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {

    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.toastService.warn('Preencha todos os campos!', 'Matrícula e senha são obrigatórios.');
      return;
    }

    this.isLoading = true;
    this.loadingService.show('Acessando. Aguarde');

    const data = this.form.value;
    this.authService.login(data).pipe(
      finalize(() => {
        console.log('login finalize');
        this.isLoading = false;
        this.loadingService.hide();
      })
    ).subscribe({
      error: (error) => {
        this.toastService.warn('Falha no login!', error?.error?.message ?? 'Erro desconhecido.');
      },
    })
  }
}
