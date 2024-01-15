class Ship {
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
    if (this.hitCount < this.length) {
      this.hitCount += 1;
    } else {
      throw new Error("Impossible to hit sunken Ship");
    }
  }
}
const carrier = new Ship("Carrier", 5);
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
carrier.hit();
console.log(carrier.gethitCount());