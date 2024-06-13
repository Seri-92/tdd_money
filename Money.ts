export class Money {
  protected amount: number;
  protected currencyValue: string;
  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currencyValue = currency;
  }
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currencyValue);
  };
  currency(): string {
    return this.currencyValue;
  };
  equals(object: any): boolean {
    if (object instanceof Money) {
      const money = object as Money;
      return this.amount === money.amount && this.currency() === money.currency();
    }
    return false;
  }
  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }
}
