import Gameboard from "./gameboard";

class Player {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  play(board, posX, posY) {
    if (board.getTile(posX, posY) !== "X") {
      board.receiveAttack(posX, posY);
    }
  }
  playAI(board){
    
    }
  }
}
const gameboard = new Gameboard(10);
const player = new Player("John");
gameboard.placeShip("Carrier", 5, 2, 2, "horizontal");
gameboard.placeShip("Battleship", 4, 7, 5, "vertical");
gameboard.placeShip("Cruiser", 3, 1, 6, "horizontal");
gameboard.placeShip("Submarine", 3, 9, 3, "vertical");
gameboard.placeShip("Destroyer", 2, 3, 9, "horizontal");
player.play(gameboard, 1, 1);
console.log(gameboard.getBoard());