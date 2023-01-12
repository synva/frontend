import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { GoodsService } from 'src/app/services/goods.service';
import { ProductService } from 'src/app/services/product.service';
import { Product2Service } from 'src/app/services/product2.service';
import { Goods } from 'src/app/models/goods.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'sp-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  subscriptions: Subscription;
  goodsList: Goods[];

  cutoff: number;

  users: User[];
  owner: User | null;

  constructor(private productService: ProductService, private product2Service: Product2Service, private goodsService: GoodsService) {
    console.log('productService.products:', this.productService.products);
    console.log('product2Service.products:', this.product2Service.products);
    console.log('goodsService.goodsList:', this.goodsService.goodsList);
    this.goodsList = [];
    this.subscriptions = this.goodsService.getGoods().subscribe((goodsList) => {
      this.goodsList = goodsList;
      console.log('topComponent.goodsList:', this.goodsList);
    });

    this.users = [
      new User({
        id: '001',
        role: 0,
        language: 'en',
        name: '王'
      }),
      new User({
        id: '002',
        role: 0,
        language: 'en',
        name: '張'
      }),
      new User({
        id: '003',
        role: 0,
        language: 'en',
        name: '鄭'
      })
    ];
    this.owner = null;
  }

  get realGoodsList(): Goods[] {
    return this.goodsService.goodsList;
  }

  deleteGoods(goods: Goods) {
    console.log('delete:', goods);
  }

  changeOwner() {
    const rnd = Math.floor(Math.random() * 3);
    this.owner = this.users[rnd];
  }
}
