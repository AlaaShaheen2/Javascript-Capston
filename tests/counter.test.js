import ItemCounterMock from './mocks/itemCounterMock.js';
import CommentsCounterMock from './mocks/commentsCounterMock.js';

describe('Testing', () => {
  test('Testing number of pokemon', () => {
    const testCounter = new ItemCounterMock();
    const testCounter2 = new ItemCounterMock();
    testCounter.countItems(12);
    testCounter2.countItems(45);
    expect(
      testCounter.itemsCounter,
    ).toEqual(4);
    expect(
      testCounter2.itemsCounter,
    ).toEqual(15);
  });
  test('Testing number of comments', () => {
    const testComment = new CommentsCounterMock();
    const testComment2 = new CommentsCounterMock();
    testComment.countComments(4);
    testComment2.countComments(9);
    expect(
      testComment.commentCounter,
    ).toEqual(4);
    expect(
      testComment2.commentCounter,
    ).toEqual(9);
  });
});