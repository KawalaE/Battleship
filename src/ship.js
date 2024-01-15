export default class Ship {
  constructor(name, length, hitCount = 0) {
    this.name = name;
    this.length = length;
    this.hitCount = hitCount;
  }

  getName() {
    return this.name;
  }

  getLength() {
    return this.length;
  }

  gethitCount() {
    return this.hitCount;
  }

  isSunk() {
    return this.length === this.hitCount;
  }

  hit() {
    this.hitCount += 1;
  }
}
