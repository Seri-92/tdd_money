export class Dollar {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
  equals(object: any): boolean {
    if (object instanceof Dollar) {
      return this.amount === object.amount;
    }
    return false;
  }
}