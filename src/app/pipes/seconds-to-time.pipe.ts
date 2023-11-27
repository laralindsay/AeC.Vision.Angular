import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime',
  standalone: true
})
export class SecondsToTimePipe implements PipeTransform {
  transform(value?: string | number | null): string {
    if ( value === null || value === undefined ) {
      return '-';
    }
    if ( typeof value === 'string' ) {
      value = Number(value);
    }
    if ( value <= 0 ) {
      return '00:00:00'
    }
    return new Date(value * 1000).toISOString().substring(11, 19)
  }
}
