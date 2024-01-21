import Gameboard from "./gameboard";
import getRandCoords from "./helper";

export default class Player {
  constructor() {
    this.hits = [];
  }

  getHits() {
    return this.hits;
  }

  getTurn() {
    return this.turn;
  }

  getHitsLength() {
    return this.hits.length;
  }

  getLastHit() {
    return this.hits[this.getHitsLength() - 1];
  }

  setHit(value) {
    this.hits.push(value);
  }

  play(board, posX, posY) {
    if (board.getTile(posX, posY) !== "X") {
      board.receiveAttack(posX, posY);
    }
  }

  playComputer(board) {
    let coords = getRandCoords(board);
    while (board.getTile(...coords) === "X") {
      coords = getRandCoords(board);
    }
    board.receiveAttack(...coords);
  }
}
let player = new Player();
let gameboard = new Gameboard(10);
player.playComputer(gameboard);

console.log(gameboard.getBoard());
