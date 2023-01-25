export class Contract {
  customer: string;
  goods: string;
  price: number | null;
  amount: number | null;

  constructor() {
    this.customer = '';
    this.goods = '';
    this.price = null;
    this.amount = null;
  }

  checkCustomerValid(): string {
    if (!this.customer) return '必須項目です。';
    if (this.customer.length > 6) return '6文字以内を入力してください。';
    if (this.customer.length < 3) return '3文字以上を入力してください。';
    return '';
  }

  checkGoodsValid(): string {
    if (!this.goods) return '必須項目です。';
    if (this.goods.length > 6) return '6文字以内を入力してください。';
    if (this.goods.length < 3) return '3文字以上を入力してください。';
    return '';
  }

  checkPriceValid(): string {
    if (this.price == null) return '必須項目です。';
    if (this.price > 10000) return '10000以内を入力してください。';
    if (this.price < 100) return '100以上を入力してください。';
    return '';
  }

  checkAmountValid(): string {
    if (this.amount == null) return '必須項目です。';
    if (this.amount > 100) return '100以内を入力してください。';
    if (this.amount < 1) return '1以上を入力してください。';
    return '';
  }

  get isValid(): boolean {
    return !this.checkCustomerValid() && !this.checkGoodsValid() && !this.checkPriceValid() && !this.checkAmountValid();
  }
}
