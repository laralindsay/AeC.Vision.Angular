import { inject, NgModule } from '@angular/core';
import { FilterService } from 'primeng/api';
import { DateTime } from 'luxon';
import { getDateTime } from '@app/utils/date.utils';

@NgModule({
  imports: [],
})
export class PrimengFiltersConfigModule {

  private readonly filterService = inject(FilterService);

  constructor() {
    this.registerDateBetweenFilter();
  }

  registerDateBetweenFilter() {
    this.filterService.register('dateBetween', (value: any, filter: [Date, Date]): boolean => {
      if ( !filter ) {
        return true;
      }
      if ( filter?.every(x => !!x) && !value ) {
        return false;
      }

      const [minDate, maxDate] = filter.map(x => x && DateTime.fromJSDate(x));
      const date = getDateTime(value);

      let validateDate = true;
      if (minDate) {
        validateDate = validateDate && (date?.diff(minDate, 'day')?.as('millisecond') ?? 0) >= 0;
      }
      if (maxDate) {
        validateDate = validateDate && (date?.diff(maxDate, 'day')?.as('millisecond') ?? 0) <= 0;
      }
      return validateDate;
    });
  }
}
