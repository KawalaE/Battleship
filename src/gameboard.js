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

  isAvailable(x, y, ship, vertical = false) {
    if (vertical) {
      if (!(y - 1 + ship.getLength() - 1 <= this.size - 1)) return false;
      for (let i = 0; i < ship.getLength(); i += 1) {
        if (this.getTile(x, y) === "O") {
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
          this.setTile(x, y + 1, "O");
        }
        success = true;
      } else {
        for (let i = 0; i < ship.getLength(); i += 1) {
          this.setTile(x - 1, y, "O");
        }
        success = true;
      }
      const shipData = {
        shipInfo: ship,
        xCoordinate: x,
        yCoordinate: y,
        isVertical: vertical,
      };
      if (success) this.ships.push(shipData);
    }
  }

  receiveAttack(x, y) {
    this.setTile(x, y, "X");
    this.getShips().forEach((ship) => {
      if (ship.isVertical && ship.xCoordinate === x) {
        const lastY = ship.yCoordinate + ship.shipInfo.getLength() - 1;
        if (y >= ship.yCoordinate && y <= lastY) {
          ship.shipInfo.hit();
        }
      } else if (!ship.isVertical && ship.yCoordinate === y) {
        const lastX = ship.xCoordinate + ship.shipInfo.getLength() - 1;
        if (x >= ship.xCoordinate && x <= lastX) {
          ship.shipInfo.hit();
        }
      }
    });
  }

  allShipSunk() {
    let sunkenCount = 0;
    if (this.getShipsCount() === 0) return false;
    this.getShips().forEach((ship) => {
      if (ship.shipInfo.isSunk()) {
        sunkenCount += 1;
      }
    });
    return sunkenCount === this.getShipsCount();
  }
}
let gameboard = new Gameboard(10);
gameboard.receiveAttack(1,1);
console.log(gameboard.getBoard());