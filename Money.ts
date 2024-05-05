export class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  equals(object: any): boolean {
    if (object instanceof Money) {
      return this.amount === object.amount;
    }
    return false;
  }
}