import Player from "./player";
import {
  attackEnemyUI,
  displayBoard,
  placeShipsUI,
  attackHumanUI,
  playAgain,
  createFooter,
} from "./ui";

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
    playAgain();
    return true;
  }
  if (computerBoard.allShipsSunk()) {
    informator.textContent = "You are the winner!";
    disableBoards();
    playAgain();
    return true;
  }
  return false;
}

function gamePlay() {
  document.querySelector(".rotate").classList.add("hide");
  attackEnemyUI(computerBoard, "board-right");
  const boardUI = document.getElementsByClassName("board-right")[0].children;
  [...boardUI].forEach((cube) => {
    cube.addEventListener("click", () => {
      if (!winnerCheck()) {
        cube.classList.add("disable");
        document.querySelector(".board-right").classList.add("disable");
        setTimeout(() => {
          attackHumanUI(humanBoard, computer, "board-left");
          winnerCheck();
          document.querySelector(".board-right").classList.remove("disable");
        }, 500);
      }
    });
  });
}

function gameSetUp() {
  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");
  createFooter();
  computerBoard.placeRandomShips();
  placeShipsUI(humanBoard, "board-left", gamePlay);
}

gameSetUp();
