import { Directive, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { DatasourceGenericDirective } from './datasource-generic.directive';

@Directive({
  selector: 'p-dropdown[appDatasource]',
  standalone: true,
})
export class DatasourcePDropdownDirective extends DatasourceGenericDirective implements OnInit, OnChanges {

  protected readonly dropdown = inject(Dropdown);

  override ngOnInit() {
    if ( !this.dropdown ) {
      return;
    }
    this.originalProperties.set('placeholder', this.dropdown?.placeholder);
    super.ngOnInit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.hasOwnProperty('placeholder') ) {
      this.originalProperties.set('placeholder', changes['placeholder'].currentValue);
    }
  }

  override beforeRequest() {
    if ( !this.dropdown ) {
      return;
    }
    this.dropdown.disabled = true;
    this.dropdown.placeholder = this.loadingMessage;
    this.dropdown.cd.detectChanges();
  }

  override requestSuccess(options: any[]) {
    if ( !this.dropdown ) {
      return;
    }
    this.dropdown.options = options;
    this.dropdown.disabled = this.originalProperties.get('disabled');
    this.dropdown.placeholder = this.originalProperties.get('placeholder');
    this.dropdown.cd.detectChanges();
  }

  override requestError() {
    if ( !this.dropdown ) {
      return;
    }
    this.dropdown.disabled = true;
    this.dropdown.placeholder = this.errorMessage;
    this.dropdown.cd.detectChanges();
  }
}
