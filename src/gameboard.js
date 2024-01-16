import Ship from "./ship";

export default class Gameboard {

  constructor(size) {
    this.size = size;
    this.tiles = Array.from({ length: size }, () => new Array(size).fill(" "));
    this.ships = [];
  }

  getBoard() {
    return this.tiles;
  }

  isAvailable(x, y, ship, vertical = false) {
    if (vertical) {
      if (!(y - 1 + ship.getLength() - 1 <= this.size - 1)) return false;
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (this.tiles[y - 1 + i][x - 1] === "O") {
          return false;
        }
      }
    } else {
      if (!(x - 1 + ship.getLength() - 1 <= this.size - 1)) return false;
      const arr = this.tiles[y - 1].slice(x - 1, x - 1 + ship.getLength());
      return arr.indexOf("O") === -1;
    }
    return true;
  }

  placeShip(x, y, ship, vertical = false) {
    let success = false;
    if (this.isAvailable(x, y, ship, vertical)) {
      if (vertical) {
        for (let i = 0; i < ship.getLength(); i += 1) {
          this.tiles[y - 1 + i][x - 1] = "O";
        }
        success = true;
      } else {
        for (let i = 0; i < ship.getLength(); i += 1) {
          this.tiles[y - 1][x - 1 + i] = "O";
        }
        success = true;
      }
      let shipData = {
        shipInfo: ship,
        xCoordinate: x,
        yCoorditane: y,
        isVertical: vertical,
      }
      if (success) this.ships.push(shipData);
    }
  }

  /*receiveAttack(x, y) {
    
  }*/
}
let gameboard = new Gameboard(10);
const carrier = new Ship("Carrier", 2);
const battleship = new Ship("Battleship", 4);
const cruiser = new Ship("Cruiser", 3);
console.log(gameboard.placeShip(6, 4, carrier));
console.log(gameboard.isAvailable(1, 5, battleship));
console.log(gameboard.placeShip(1, 7, cruiser, true));
console.log(gameboard.receiveAttack(7, 4));
console.log(gameboard.ships);
console.log(gameboard.tiles);
