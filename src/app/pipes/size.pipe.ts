import { Pipe, PipeTransform } from '@angular/core';
import BigNumber from 'bignumber.js';

@Pipe({
  name: 'size'
})
export class SizePipe implements PipeTransform {
  transform(value: number | BigNumber): string {
    const b = new BigNumber(value);
    if (b.isNaN()) {
      return '';
    } else {
      if (b.isLessThanOrEqualTo(0)) {
        return '';
      } else if (b.isLessThan(1000)) {
        return b.toFormat() + ' Byte';
      } else if (b.isLessThan(1024 * 1000)) {
        const k = b.dividedBy(1024).dp(2);
        return k.toFormat() + ' KB';
      } else if (b.isLessThan(1024 * 1024 * 1000)) {
        const m = b.dividedBy(1024).dividedBy(1024).dp(2);
        return m.toFormat() + ' MB';
      } else if (b.isLessThan(1024 * 1024 * 1024 * 1000)) {
        const g = b.dividedBy(1024).dividedBy(1024).dividedBy(1024).dp(2);
        return g.toFormat() + ' GB';
      } else {
        const t = b.dividedBy(1024).dividedBy(1024).dividedBy(1024).dividedBy(1024).dp(2);
        return t.toFormat() + ' TB';
      }
    }
  }
}
