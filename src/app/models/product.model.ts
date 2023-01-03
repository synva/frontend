import { Response } from 'src/app/types/response';

export class Product {
  id: string;
  name: string;

  constructor(data: Response.Product) {
    this.id = data.id;
    this.name = data.name;
  }
}
