export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  abstract times(multiplier: number): Money;
  equals(object: any): boolean {
    if (object instanceof Money) {
      const money = object as Money;
      return this.amount === money.amount && this.constructor === money.constructor;
    }
    return false;
  }
  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}

class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}