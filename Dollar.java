package money;
class Dollar extends Money {
    Dollar(int amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }
    Money times(int multiplier) {
        return new Dollar(amount * multiplier, currency);
    }
}