import Player from "./player";
import { attackEnemyUI, displayBoard, placeShipsUI, attackHumanUI } from "./ui";
import Gameboard
 from "./gameboard";
const human = new Player(10);
const computer = new Player(10);
const computerBoard = human.getEnemyBoard();
const humanBoard = computer.getEnemyBoard();

function gamePlay() {
  attackEnemyUI(computerBoard, "board-right");
  attackHumanUI(humanBoard, computer, "board-left");
}

function gameSetUp() {
  const informator = document.querySelector(".informator");
  //create boards
  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");

  //place ships
  computerBoard.placeEnemyShips();
  placeShipsUI(humanBoard, "board-left", gamePlay);

}


gameSetUp();