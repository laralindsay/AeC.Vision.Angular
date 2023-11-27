import { map, timer } from 'rxjs';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-loading-fullscreen',
  standalone: true,
  imports: [CommonModule, ProgressSpinnerModule, NgOptimizedImage],
  templateUrl: './loading-fullscreen.component.html',
  styleUrls: ['./loading-fullscreen.component.scss']
})
export class LoadingFullscreenComponent {
  message = signal<string | undefined>('Carregando');
  useDots = signal(true);

  dots$ = timer(0, 1000).pipe(
    map(i => '.'.repeat(i % 3 + 1)),
  );
  dots = toSignal(this.dots$);


  label = computed(() => {
    const message = this.message() ?? 'Carregando';
    const dots = (this.useDots() ? this.dots() : '') ?? '';
    return `${message}${dots}`;
  });
}
