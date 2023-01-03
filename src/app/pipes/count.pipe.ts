import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {
  transform(value: number | BigNumber, unit: string): string {
    const v = new BigNumber(value);
    if (v.isNaN()) {
      return '';
    } else {
      let s = v.toFormat(0);
      if (unit) {
        s += ' ' + unit;
        if (v.isGreaterThan(1)) {
          s += 's';
        }
      }
      return s;
    }
  }
}
