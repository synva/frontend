import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DatePipe } from './date.pipe';
import { BigNumberPipe } from './bignumber.pipe';
import { CountPipe } from './count.pipe';
import { SizePipe } from './size.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [DatePipe, BigNumberPipe, CountPipe, SizePipe, PercentagePipe],
  imports: [BrowserModule, CommonModule],
  exports: [DatePipe, BigNumberPipe, CountPipe, SizePipe, PercentagePipe]
})
export class PipesModule {}
