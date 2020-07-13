/*
 * @file pagination class should go here
 */
class Pages {
  constructor(pages, current = 0, limit = 2) {
    this.pages = pages;
    this.current = current;
    this.limit = limit;
  }
  next() {
    if (this.current > this.pages.length - 1 || this.pages.length === 0) {
      console.log("exhausted");
      return;
    }
    const result = this.pages.slice(this.current, this.current + this.limit);
    this.current = this.current + this.limit;
    return result;
  }
}

const pageList = new Pages(["a", 1, 2, 3, 4, 5, 6, 7]);

console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
console.log(pageList.next());
