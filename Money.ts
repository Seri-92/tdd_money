export class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals(object: any): boolean {
    if (object instanceof Money) {
      const money = object as Money;
      return this.amount === money.amount && this.constructor === money.constructor;
    }
    return false;
  }
}