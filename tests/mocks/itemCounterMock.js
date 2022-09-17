export default class ItemCounterMock {
  countItems(allItems) {
    this.itemsCounter = allItems / 3;
  }
}