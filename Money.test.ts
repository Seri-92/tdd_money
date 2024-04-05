import { Dollar } from './Dollar';

describe('MoneyTest', () => {
  test('掛け算のテスト', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);
  });
  test('等号のテスト', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  })
});