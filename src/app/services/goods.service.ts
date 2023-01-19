import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Response } from '../types/response';
import { ApiService } from './api.service';
import { ProductService } from './product.service';
import { Goods } from '../models/goods.model';

@Injectable()
export class GoodsService {
  constructor(private apiService: ApiService, private productService: ProductService) {
    this.goodsList = [];
  }

  getGoods(): Observable<Goods[]> {
    console.log('goodsService.getGoods');
    // return this.apiService.get<Response.Goods[]>('getGoods').pipe(
    //   map((data) => {
    //     return data.map((one) => {
    //       const product = this.productService.products.find((product) => product.id === one.id);
    //       return new Goods(one, product!);
    //     });
    //   })
    // );
    return this.mockApi().pipe(
      map((data) => {
        return data.map((one) => {
          const product = this.productService.products.find((product) => product.id === one.id);
          return new Goods(one, product!);
        });
      })
    );
  }

  private mockApi(): Observable<Response.Goods[]> {
    return of([
      {
        id: '001',
        shop: '成都支店',
        price: 2400,
        limit: 1671086666253
      },
      {
        id: '002',
        shop: '成都支店',
        price: 850,
        limit: 1691086666000
      },
      {
        id: '001',
        shop: '東京支店',
        price: 3000,
        limit: 1681086666253
      },
      {
        id: '002',
        shop: '東京支店',
        price: 500,
        limit: 1697086666000
      },
      {
        id: '001',
        shop: '火星支店',
        price: 2100,
        limit: 1661086666253
      },
      {
        id: '002',
        shop: '火星支店',
        price: 1000,
        limit: 1701086666000
      },
      {
        id: '001',
        shop: '火星支店',
        price: 2100,
        limit: 1661086666253
      },
      {
        id: '002',
        shop: '火星支店',
        price: 1000,
        limit: 1701086666000
      },
      {
        id: '001',
        shop: '火星支店',
        price: 2100,
        limit: 1661086666253
      },
      {
        id: '002',
        shop: '火星支店',
        price: 1000,
        limit: 1701086666000
      }
    ]);
  }

  // for auth sample
  goodsList: Goods[];
  authGetGoods(): Observable<boolean> {
    console.log('goodsService.authGetGoods');
    return this.mockApi().pipe(
      map((data) => {
        this.goodsList = data.map((one) => {
          const product = this.productService.products.find((product) => product.id === one.id);
          return new Goods(one, product!);
        });
        return true;
      })
    );
  }
}
