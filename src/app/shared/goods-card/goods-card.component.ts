import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import BigNumber from 'bignumber.js';

import { Goods } from 'src/app/models/goods.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'sp-goods-card',
  templateUrl: './goods-card.component.html',
  styleUrls: ['./goods-card.component.scss']
})
export class GoodsCardComponent {
  @Input() goods: Goods;
  @Input() cutoff: number;

  @Input() set owner(v: User | null) {
    this._owner = v;
    this.ownerChanged();
  }
  get owner(): User | null {
    return this._owner;
  }
  _owner: User | null;

  @Output() deleted = new EventEmitter<Goods>();

  constructor() {}

  get price(): BigNumber {
    if (this.cutoff != null) {
      return this.goods.price.multipliedBy(this.cutoff);
    }
    return this.goods.price;
  }

  deleteGoods() {
    this.deleted.emit(this.goods);
  }

  ownerChanged() {
    this.goods.price = this.goods.price.multipliedBy(0.9);
  }
}
