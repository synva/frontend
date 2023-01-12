import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GoodsService } from '../services/goods.service';

@Injectable()
export class GoodsGuard implements CanActivate {
  constructor(private router: Router, private goodsService: GoodsService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.goodsService.authGetGoods();
  }
}
