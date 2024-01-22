import Gameboard from "./gameboard";
import getRandCoords from "./helper";

export default class Player {
  constructor(size) {
    this.enemyBoard = new Gameboard(size);
  }

  getEnemyBoard() {
    return this.enemyBoard.getBoard();
  }

  play(posX, posY) {
    if (this.enemyBoard.getTile(posX, posY) !== "X") {
      this.enemyBoard.receiveAttack(posX, posY);
    }
  }

  playComputer() {
    let coords = getRandCoords(this.enemyBoard);
    while (this.enemyBoard.getTile(...coords) === "X") {
      coords = getRandCoords(this.enemyBoard);
    }
    this.enemyBoard.receiveAttack(...coords);
  }
}
let gameboard = new Gameboard(5);
const human = new Player(10);
const computer = new Player(10);
console.log(getRandCoords(gameboard))
human.play(1,1);
console.log(getRandCoords(gameboard));
console.log(human.getEnemyBoard());
computer.playComputer();
console.log(computer.getEnemyBoard());