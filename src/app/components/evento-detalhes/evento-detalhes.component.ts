import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, Subject, switchMap } from "rxjs";
import { ButtonModule } from "primeng/button";
import { InputTextareaModule } from "primeng/inputtextarea";
import { LoadingComponent } from "@components/loading/loading.component";
import { PaginatorModule } from "primeng/paginator";
import { RippleModule } from "primeng/ripple";
import { HttpEventoService } from "@api-vision360/services/http-evento.service";

@Component({
  selector: 'app-evento-detalhes',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextareaModule, LoadingComponent, PaginatorModule, RippleModule],
  templateUrl: './evento-detalhes.component.html',
  styleUrls: ['./evento-detalhes.component.scss']
})
export class EventoDetalhesComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly httpEventoService = inject(HttpEventoService);

  loading = true;
  hasError = false;

  id$ = new Subject<number>();
  idTipoOcorrencia$ = new Subject<number>();
  tryAgain$ = new BehaviorSubject(undefined);

  data$ = this.id$.pipe(
    takeUntilDestroyed(this.destroyRef),
    combineLatestWith(
      this.idTipoOcorrencia$,
      this.tryAgain$
    ),
    switchMap(([id, idTipoOcorrencia]) => {
      this.loading = true;
      this.hasError = false;

      return this.httpEventoService.apiEventoScreenshotGet$Json({
        idRegistro: id,
        idTipoOcorrencia: idTipoOcorrencia,
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading = false),
        catchError(error => {
          if (error.status !== 404) {
            this.hasError = true;
          }
          return EMPTY;
        }),
      )
    })
  );
  data = toSignal(this.data$);

  ngOnDestroy() {
    this.id$.complete();
    this.idTipoOcorrencia$.complete();
  }

  load(id: number, idTipoOcorrencia: number) {
    this.id$.next(id);
    this.idTipoOcorrencia$.next(idTipoOcorrencia);
  }

  tryAgain() {
    this.tryAgain$.next(undefined);
  }
}
