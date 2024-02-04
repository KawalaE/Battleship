import Gameboard from "./gameboard";
import { getRandCoords } from "./helper";

export default class Player {
  constructor(enemyName, size) {
    this.enemyName = enemyName;
    this.enemyBoard = new Gameboard(`${this.enemyName}Board`, size);
  }

  getEnemyName() {
    return this.enemyName;
  }

  getEnemyBoard() {
    return this.enemyBoard;
  }

  getEnemyTiles() {
    return this.enemyBoard.getBoard();
  }

  play(posX, posY) {
    if (this.enemyBoard.getTile(posX, posY) !== "X") {
      this.enemyBoard.receiveAttack(posX, posY);
    }
  }

  playComputer() {
    let coords = getRandCoords(this.getEnemyBoard());
    while (this.getEnemyBoard().getTile(...coords) === "X") {
      coords = getRandCoords(this.enemyBoard);
    }
    this.getEnemyBoard().receiveAttack(...coords);
    return coords;
  }
}
