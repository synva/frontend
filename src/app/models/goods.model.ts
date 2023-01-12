import BigNumber from 'bignumber.js';
import moment from 'moment';
import { Response } from 'src/app/types/response';
import { Product } from './product.model';

export class Goods {
  product: Product;
  shop: string;
  price: BigNumber;
  limit: moment.Moment;

  constructor(data: Response.Goods, product: Product) {
    this.product = product;
    this.shop = data.shop;
    this.price = new BigNumber(data.price);
    this.limit = moment(data.limit);
  }

  get id(): string {
    return this.product.id + '_' + this.shop;
  }

  get name(): string {
    return this.shop + this.product.name;
  }
}
