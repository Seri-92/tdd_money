import { Dollar } from './Dollar';

describe('MoneyTest', () => {
  test('掛け算のテスト', () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });
});