export default class Ship {
  constructor(name, length, xPos, yPos, orientation, hitCount = 0) {
    this.name = name;
    this.length = length;
    this.xPos = xPos;
    this.yPos = yPos;
    this.orientation = orientation;
    this.hitCount = hitCount;
  }

  getName() {
    return this.name;
  }

  getLength() {
    return this.length;
  }

  getXPos() {
    return this.xPos;
  }

  getYPos() {
    return this.yPos;
  }

  getOrientation() {
    return this.orientation;
  }

  getHitCount() {
    return this.hitCount;
  }

  isSunk() {
    return this.length === this.hitCount;
  }

  hit() {
    this.hitCount += 1;
  }
}
