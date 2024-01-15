class Gameboard {
  constructor(size) {
    this.size = size;
    this.tiles = Array.from({ length: size }, () => new Array(size).fill(" "));
  }

  getBoard(){
    return this.tiles;
  }

  placeShip(x, y, length, vertical = false) {
    if (vertical) {
      if (y - 1 + length - 1 <= this.size - 1) {
        for (let i = 0; i < length; i++) {
          this.tiles[y - 1 + i][x - 1] = "X";
        }
      }
    } else if (x - 1 + length - 1 <= this.size - 1 && !vertical) {
      for (let i = 0; i < length; i++) {
        this.tiles[y - 1][x - 1 + i] = "X";
      }
    }
  }
}
const gameboard = new Gameboard(10);

console.log(gameboard.placeShip(2, 9, 2, true));
console.log(gameboard.getBoard());