export namespace Response {
  type User = {
    id: string;
    role: number;
    language: string;
    name: string;
  };
  type Product = {
    id: string;
    name: string;
  };
  type Goods = {
    id: string;
    shop: string;
    price: number;
    limit: number;
  };
}
