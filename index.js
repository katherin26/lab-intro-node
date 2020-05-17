class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((item1, item2) => {
      return item1 - item2;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return Math.min(...this.items);
  }

  sum() {
    let sum = 0;
    for (let item of this.items) {
      sum += item;
    }
    return sum;
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    let sum = 0;
    for (let item of this.items) {
      sum += item;
    }
    return sum / this.length;
  }
}

module.exports = SortedList;
