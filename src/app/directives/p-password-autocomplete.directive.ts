import { AfterViewInit, Directive, inject, Input, OnChanges } from '@angular/core';
import { Password } from 'primeng/password';

@Directive({
  selector: 'p-password[autocomplete]',
  standalone: true
})
export class PPasswordAutocompleteDirective implements OnChanges, AfterViewInit {
  private readonly password = inject(Password);

  @Input() autocomplete: string = 'current-password';

  ngOnChanges() {
    this.password?.input?.nativeElement?.setAttribute?.('autocomplete', this.autocomplete);
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }
}
