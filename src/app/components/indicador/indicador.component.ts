import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from "primeng/skeleton";

@Component({
  selector: 'app-indicador',
  standalone: true,
  imports: [CommonModule, SkeletonModule],
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent {

  @Input() header?: string | null;
  @Input() value?: any;

  @Input() subValue?: any;
  @Input() subValueClass = 'bg-dark bg-opacity-25';
  @Input() icon?: string | null;

  @Input() loading = false;
  @Input() hasError = false;

  @Input() resumido = false;

  @Output() tryAgain = new EventEmitter<void>();

  emitTryAgain() {
    this.tryAgain.emit();
  }
}
