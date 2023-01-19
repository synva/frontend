import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { SampleDialogComponent } from './sample-dialog/sample-dialog.component';

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

  animal: string;

  dataSource = new MatTableDataSource<Goods>();
  columns = ['no', 'id', 'name', 'price', 'limit', 'others', 'comment'];

  preScrollTop: number = 0;
  trigger: boolean;
  isLast = false;
  page = 0;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private product2Service: Product2Service,
    private goodsService: GoodsService
  ) {
    console.log('productService.products:', this.productService.products);
    console.log('product2Service.products:', this.product2Service.products);
    console.log('goodsService.goodsList:', this.goodsService.goodsList);
    this.goodsList = [];
    this.subscriptions = this.goodsService.getGoods().subscribe((goodsList) => {
      this.goodsList = goodsList;
      console.log('topComponent.goodsList:', this.goodsList);
      // ******************** important ***************************
      this.dataSource.data = this.goodsList;
      // **********************************************************
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

  popup() {
    const goods = this.goodsList[0];
    const dialogRef = this.dialog.open(SampleDialogComponent, {
      autoFocus: false,
      data: { goods: goods },
      width: '500px',
      minHeight: '300px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.animal = result;
    });
  }

  handleScroll(e: any) {
    if (this.preScrollTop > 0 && this.preScrollTop < e.srcElement.scrollTop) {
      if (e.srcElement.scrollTop + e.srcElement.clientHeight >= e.target.scrollHeight - 100) {
        if (!this.trigger) {
          this.trigger = true;

          if (!this.isLast) {
            this.page++;
            console.log('page:', this.page);
            // this.getDataFromServer().subscribe(goodsList => {
            //   this.goodsList = this.goodsList.concat(goodsList);
            //   if (goodsList.length <= 0) this.isLast = true;
            //   // ******************** important ***************************
            //   this.dataSource.data = this.goodsList;
            //   // **********************************************************
            // });
          }

          setTimeout(() => {
            this.trigger = false;
          }, 500);
        }
      }
    }
    this.preScrollTop = e.srcElement.scrollTop;
  }
}
