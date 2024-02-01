import Player from "./player";
import { attackEnemyUI, displayBoard, placeShipsUI, attackHumanUI } from "./ui";
import Gameboard from "./gameboard";

const human = new Player("computer", 10);
const computer = new Player("human", 10);
const computerBoard = human.getEnemyBoard();
const humanBoard = computer.getEnemyBoard();

const informator = document.querySelector(".informator");

function disableBoards() {
  document.querySelector(".board-left").classList.add("disable");
  document.querySelector(".board-right").classList.add("disable");
}
function winnerCheck() {
  if (humanBoard.allShipsSunk()) {
    informator.textContent = "Computer won!";
    disableBoards();
  } else if (computerBoard.allShipsSunk()) {
    informator.textContent = "You are the winner!";
    disableBoards();
  }
}
function gamePlay() {
  attackEnemyUI(computerBoard, "board-right");
  const boardUI = document.getElementsByClassName("board-right")[0].children;
  // eslint-disable-next-line no-restricted-syntax
  for (const cube of boardUI) {
    cube.addEventListener("click", () => {
      setTimeout(() => attackHumanUI(humanBoard, computer, "board-left"), 1000);
      winnerCheck();
    });
  }
}

function gameSetUp() {
  
  //create boards
  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");

  //place ships
  computerBoard.placeEnemyShips();
  placeShipsUI(humanBoard, "board-left", gamePlay);

}


gameSetUp();