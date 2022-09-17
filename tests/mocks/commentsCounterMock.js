export default class CommentsCounterMock {
  countComments(num) {
    this.arr = [];
    this.commentCounter = 0;
    for (this.i = 0; this.i + 1 <= num; this.i += 1) {
      this.arr[this.i] = this.i;
      this.commentCounter += 1;
    }
  }
}