import Gameboard from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.hits = [];
  }

  getName() {
    return this.name;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandCoords(board) {
    const randX = this.getRandomInt(1, board.getSize() + 1);
    const randY = this.getRandomInt(1, board.getSize() + 1);
    return [randX, randY];
  }

  setHit(value) {
    this.hits.push(value);
  }

  getHits() {
    return this.hits;
  }

  play(board, posX, posY) {
    if (board.getTile(posX, posY) !== "X") {
      board.receiveAttack(posX, posY);
    }
  }

  playAI(board) {
    let coords = this.getRandCoords(board);
    while (board.getTile(...coords) === "X") {
      coords = this.getRandCoords(board);
    }
    if (board.getTile(...coords) === "S") {
      this.setHit(coords);
    }
    console.log(this.getHits());
    board.receiveAttack(...coords);
  }
}
const gameboard = new Gameboard(10);
const player = new Player("John");
gameboard.placeShip("Carrier", 5, 2, 2, "horizontal");
gameboard.placeShip("Battleship", 4, 7, 5, "vertical");
gameboard.placeShip("Cruiser", 3, 1, 6, "horizontal");
gameboard.placeShip("Submarine", 3, 9, 3, "vertical");
gameboard.placeShip("Destroyer", 2, 3, 9, "horizontal");
console.log(gameboard.getBoard());
player.playAI(gameboard);
player.playAI(gameboard);
player.playAI(gameboard);
player.playAI(gameboard);

console.log(gameboard.getBoard());