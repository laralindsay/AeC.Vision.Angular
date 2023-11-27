import { Component, DestroyRef, inject, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadorComponent } from "@components/indicador/indicador.component";
import { HttpChamadaService } from "@api-vision360/services/http-chamada.service";
import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";
import { BehaviorSubject, catchError, combineLatestWith, EMPTY, finalize, map, switchMap } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { SecondsToTimePipe } from "@pipes/seconds-to-time.pipe";

@Component({
  selector: 'app-chamada-status',
  standalone: true,
  imports: [CommonModule, IndicadorComponent, SecondsToTimePipe],
  templateUrl: './chamada-status.component.html',
  styleUrls: ['./chamada-status.component.scss']
})
export class ChamadaStatusComponent implements OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly httpChamadaService = inject(HttpChamadaService);
  private readonly activatedRoute = inject(ActivatedRoute);

  chamadaId$ = this.activatedRoute.paramMap.pipe(
    map(x => x.get('idChamada')),
    map(x => x ? +x : 0)
  );
  chamadaId = toSignal(this.chamadaId$);

  loading = signal(false);
  hasError = signal(false);

  tryAgain$ = new BehaviorSubject(undefined);

  data$ = this.chamadaId$.pipe(
    combineLatestWith(
      this.tryAgain$,
    ),
    switchMap(([id]) => {
      this.loading.set(true);
      this.hasError.set(false);
      return this.httpChamadaService.apiChamadaIdIndicadoresGet$Json({
        id: id,
      }).pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.loading.set(false)),
        catchError(() => {
          this.hasError.set(true);
          return EMPTY;
        })
      );
    })
  );
  data = toSignal(this.data$);

  ngOnDestroy() {
    this.tryAgain$.complete();
  }
}
