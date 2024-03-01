package money;

class Dollar {
    Dollar(int amount) {
        this.amount = amount;
    }
    void times(int multiplier) {
        amount *= multiplier;
    }
}