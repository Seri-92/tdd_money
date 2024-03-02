package money;

class Dollar {
    Dollar(int amount) {
        this.amount = amount;
    }
    Dollar times(int multiplier) {
        return new Dollar(amount * multiplier);
    }
}