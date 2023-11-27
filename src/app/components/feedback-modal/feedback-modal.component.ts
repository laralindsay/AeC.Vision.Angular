import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from "primeng/inputtextarea";
import { HttpAlertaService } from "@api-vision360/services";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { catchError, EMPTY, finalize, first, Subject, switchMap, tap, timeout } from "rxjs";
import { ToastService } from "@services/toast.service";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { LoggedUserService } from "@services/logged-user.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LoadingComponent } from "@components/loading/loading.component";

@Component({
  selector: 'app-feedback-modal',
  standalone: true,
  imports: [CommonModule, InputTextareaModule, ButtonModule, RippleModule, ReactiveFormsModule, LoadingComponent],
  templateUrl: './feedback-modal.component.html',
  styleUrls: ['./feedback-modal.component.scss']
})
export class FeedbackModalComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly loggedUserService = inject(LoggedUserService);
  private readonly httpAlertaService = inject(HttpAlertaService);
  private readonly toastService = inject(ToastService);

  form = inject(FormBuilder).nonNullable.group({
    id: [0],
    feedback: ['', [Validators.required]]
  });

  hasError = false;
  loading = false;
  saving = false;
  closed$ = new Subject<boolean>();

  ngOnDestroy() {
    this.closed$.complete();
  }

  cancel() {
    this.closed$.next(false);
  }

  load(id: number) {
    this.loading = true;
    this.hasError = false;

    this.form.controls.id.setValue(id);
    this.httpAlertaService.apiAlertaFeedbackGet$Json({ id }).pipe(
      takeUntilDestroyed(this.destroyRef),
      timeout(5000),
      finalize(() => this.loading = false),
      catchError(error => {
        if ( error.status !== 404 ) {
          this.hasError = true;
        }
        return EMPTY;
      }),
      tap(feedback => {
        this.form.controls.feedback.setValue(feedback.texto ?? '');
      })
    ).subscribe();
  }

  save() {
    if ( this.form.invalid ) {
      return;
    }

    this.saving = true;

    this.loggedUserService.user$.pipe(
      takeUntilDestroyed(this.destroyRef),
      first(),
      switchMap(user => this.httpAlertaService.apiAlertaFeedbackPost({
        body: {
          id: this.form.controls.id.value,
          texto: this.form.controls.feedback.value,
          dataHora: new Date().toISOString(),
          matricula: user?.matricula ? Number(user?.matricula) : -1,
        }
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.saving = false),
        tap(() => {
          this.toastService.success('Feedback salvo com sucesso!');
          this.closed$.next(true);
        }),
        catchError(() => {
          this.toastService.error('Falha ao salvar feedback!');
          return EMPTY;
        })
      ))
    ).subscribe();
  }
}
