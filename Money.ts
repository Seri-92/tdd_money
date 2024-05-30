export abstract class Money {
  protected amount: number;
  protected currencyValue: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currencyValue = currency;
  }
  abstract times(multiplier: number): Money;
  currency(): string {
    return this.currencyValue;
  };
  equals(object: any): boolean {
    if (object instanceof Money) {
      const money = object as Money;
      return this.amount === money.amount && this.constructor === money.constructor;
    }
    return false;
  }
  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }
}

class Dollar extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
    this.currencyValue = currency;
  }
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  constructor(amount: number, currency: string) {
    super(amount, currency);
    this.currencyValue = currency;
  }
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}