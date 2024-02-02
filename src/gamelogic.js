import Player from "./player";
import { attackEnemyUI, displayBoard, placeShipsUI, attackHumanUI, playAgain} from "./ui";

const human = new Player("computer", 10);
const computer = new Player("human", 10);
const computerBoard = human.getEnemyBoard();
const humanBoard = computer.getEnemyBoard();

const informator = document.querySelector(".informator");

function disableBoards() {
  document.querySelector(".board-left").classList.add("disable");
  document.querySelector(".board-right").classList.add("disable");
}
// eslint-disable-next-line import/prefer-default-export
function winnerCheck() {
  if (humanBoard.allShipsSunk()) {
    disableBoards();
    informator.textContent = "Computer won!";
    return true;
  }
  if (computerBoard.allShipsSunk()) {
    disableBoards();
    informator.textContent = "You are the winner!";
    return true;
  }
  return false;
}
function gamePlay() {
  document.querySelector(".rotate").classList.add("hide");
  attackEnemyUI(computerBoard, "board-right");
  const boardUI = document.getElementsByClassName("board-right")[0].children;
  // eslint-disable-next-line no-restricted-syntax
  for (const cube of boardUI) {
    cube.addEventListener("click", () => {
      cube.classList.add("disable");
      if (!winnerCheck()) {
        setTimeout(() => {
          attackHumanUI(humanBoard, computer, "board-left");
          if (winnerCheck()) playAgain();
        }, 1000);
      } else playAgain();
    });
  }
}

function gameSetUp() {
  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");
  computerBoard.placeEnemyShips();
  placeShipsUI(humanBoard, "board-left", gamePlay);
}

gameSetUp();
