import Gameboard from "./gameboard";
import getRandCoords from "./helper";

export default class Player {
  constructor(size) {
    this.enemyBoard = new Gameboard(size);
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
    let coords = getRandCoords(this.enemyBoard);
    while (this.getEnemyBoard().getTile(...coords) === "X") {
      coords = getRandCoords(this.enemyBoard);
    }
    this.getEnemyBoard().receiveAttack(...coords);
  }
}
const player = new Player(5);
console.log(player.playComputer());
console.log(player.getEnemyTiles());
