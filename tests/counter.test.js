import itemCounterMock from './mocks/itemCounterMock.js';

describe('Testing', () => {
  test('Testing number of pokemon', () => {
    const testCounter = new itemCounterMock;
    const testCounter2 = new itemCounterMock;
    testCounter.countItems(12)
    testCounter2.countItems(45)
    expect(
      testCounter.itemsCounter
      ).toEqual(4);
    expect(
      testCounter2.itemsCounter
      ).toEqual(15);
  });
});
