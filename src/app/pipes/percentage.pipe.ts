import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  transform(value: BigNumber | number | null, digit: number = 2): string {
    if (value != null) {
      const v = new BigNumber(value).multipliedBy(100);
      let s = v.toFormat(digit);
      s += '%';
      return s;
    }
    return '';
  }
}
