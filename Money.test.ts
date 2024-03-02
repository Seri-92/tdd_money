import { Dollar } from './Dollar';

describe('MoneyTest', () => {
  test('掛け算のテスト', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);
  });
});