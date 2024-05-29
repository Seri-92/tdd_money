export abstract class Money {
  protected amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }
  abstract times(multiplier: number): Money;
  abstract currency(): string;
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
  private currencyValue: string;
  constructor(amount: number) {
    super(amount);
    this.currencyValue = "USD";
  }
  currency(): string {
    return this.currencyValue;
  }
  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  private currencyValue: string;
  constructor(amount: number) {
    super(amount);
    this.currencyValue = "CHF";
  }
  currency(): string {
    return this.currencyValue;
  }
  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}