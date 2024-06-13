import { Money } from './Money';
describe('MoneyTest', () => {
  test('掛け算のテスト', () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });
  test('等号のテスト', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  })
  test('Franc の掛け算のテスト', () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  })
 test('通貨のテスト', () => {
    expect(Money.dollar(1).currency()).toBe('USD');
    expect(Money.franc(1).currency()).toBe('CHF');
  })
});