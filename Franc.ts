export class Franc {
  private amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
  equals(object: any): boolean {
    if (object instanceof Franc) {
      return this.amount === object.amount;
    }
    return false;
  }
}