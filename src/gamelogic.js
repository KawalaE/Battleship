import Player from "./player";
import { displayBoard, getCube, displayShip, displayAllShips, insertFleet, placeShipsUI} from "./ui"


const human = new Player(10);
const computer = new Player(10);
const computerBoard = human.getEnemyBoard();
const humanBoard = computer.getEnemyBoard();

// eslint-disable-next-line import/prefer-default-export
export function attackEnemy() {
  const informator = document.querySelector(".informator");
  informator.textContent = `Attack the enemy`;
}

function gameLoop() {
  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");

  //place ships on enemy gameboard
  computerBoard.placeEnemyShips();
	console.log(computerBoard.getBoard());

	//user place ships on left board
  placeShipsUI(humanBoard, "board-left"); 
}

gameLoop();