import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'bignumber'
})
export class BigNumberPipe implements PipeTransform {
  transform(value: BigNumber | number | null, digit: number = 2, unit: string = ''): string {
    if (value != null) {
      const v = new BigNumber(value);
      let s = v.toFormat(digit);
      if (unit) {
        s += ' ' + unit;
      }
      return s;
    }
    return '';
  }
}
