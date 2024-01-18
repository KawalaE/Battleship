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

  getSize() {
    return this.size;
  }

  getTile(x, y) {
    return this.tiles[y - 1][x - 1];
  }

  getShips() {
    return this.ships;
  }

  getShipsCount() {
    return this.ships.length;
  }

  setTile(x, y, value) {
    this.tiles[y - 1][x - 1] = value;
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  isAvailable(x, y, length, orientation) {
    if (x < 1 || x > 10 || y > 10 || y < 1) {
      return false;
    }
    if (orientation === "horizontal") {
      if (x + length - 1 > this.getSize()) {
        return false;
      }
      for (let i = x; i < x + length - 1; i += 1) {
        if (this.getTile(i, y) === "S") {
          return false;
        }
      }
    } else if (orientation === "vertical") {
      if (y + length - 1 > this.getSize()) {
        return false;
      }
      for (let i = y; i < y + length - 1; i += 1) {
        if (this.getTile(x, i) === "S") {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(name, length, x, y, orienatation) {
    if (this.isAvailable(x, y, length, orienatation)) {
      const newShip = new Ship(name, length, x, y, orienatation);
      this.addShip(newShip);
      if (newShip.getOrientation() === "horizontal") {
        for (
          let i = newShip.getXPos();
          i < newShip.getXPos() + newShip.getLength();
          i += 1
        ) {
          this.setTile(i, newShip.getYPos(), "S");
        }
      } else if (newShip.getOrientation() === "vertical") {
        for (
          let i = newShip.getYPos();
          i < newShip.getYPos() + newShip.getLength();
          i += 1
        ) {
          this.setTile(newShip.getXPos(), i, "S");
        }
      }
    }
  }

  receiveAttack(x, y) {
    if (this.getTile(x, y) === "S") {
      this.getShips().forEach((ship) => {
        if (ship.getOrientation() === "horizontal") {
          if (
            ship.getYPos() === y &&
            ship.getXPos() <= x &&
            ship.getXPos() + ship.getLength() - 1 >= x
          ) {
            ship.hit();
          }
        } else if (
          ship.getXPos() === x &&
          ship.getYPos() <= y &&
          ship.getYPos() + ship.getLength() - 1 >= y
        ) {
          ship.hit();
        }
      });
    }
    this.setTile(x, y, "X");
  }

  allShipsSunk() {
    let sunkCount = 0;
    this.getShips().forEach((ship) => {
      if (ship.isSunk()) {
        sunkCount += 1;
      }
    });
    return sunkCount === this.getShipsCount();
  }
}
