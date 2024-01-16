import Ship from "./ship";

export default class Gameboard {
  constructor(size) {
    this.size = size;
    this.tiles = Array.from({ length: size }, () => new Array(size).fill(" "));
  }

  getBoard() {
    return this.tiles;
  }

  isAvailable(x, y, ship, vertical = false) {
    if (vertical) {
      for (let i = 0; i < ship.length; i += 1) {
        if (this.tiles[y - 1 + i][x - 1] === "O") {
          return false;
        }
      }
    } else {
      const arr = this.tiles[y - 1].slice(x - 1, x - 1 + ship.length);
      return arr.indexOf("X") === -1;
    }
    return true;
  }

  placeShip(x, y, ship, vertical = false) {
    if (this.isAvailable(x, y, ship.length, vertical)) {
      if (vertical) {
        if (y - 1 + ship.length - 1 <= this.size - 1) {
          for (let i = 0; i < ship.length; i += 1) {
            this.tiles[y - 1 + i][x - 1] = "O";
          }
        }
      } else if (x - 1 + ship.length - 1 <= this.size - 1 && !vertical) {
        for (let i = 0; i < ship.length; i += 1) {
          this.tiles[y - 1][x - 1 + i] = "O";
        }
      }
    }
  }
}
const gameboard = new Gameboard(10);
const carrier = new Ship("Carrier", 5);
console.log(gameboard.placeShip(3,5, carrier, true))
console.log(gameboard.tiles);
