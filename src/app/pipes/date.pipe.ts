import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: moment.Moment | null, format: string = 'YYYY/MM/DD HH:mm:ss', invalid: string = ''): string {
    if (value) {
      return value.format(format);
    } else {
      return invalid;
    }
  }
}
