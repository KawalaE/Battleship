import Player from "./player";
import { displayBoard, getCube, displayShip, displayAllShips, insertFleet, placeShipsUI} from "./ui"


function gameLoop() {
  const human = new Player(10);
  const computer = new Player(10);
  const computerBoard = human.getEnemyBoard();
  const humanBoard = computer.getEnemyBoard();

  displayBoard(human, "board-left", "left-side");
  displayBoard(computer, "board-right", "right-side");

  //place ships on enemy gameboard
  computerBoard.placeEnemyShips();
	console.log(computerBoard.getBoard());

	//user place ships on left board
	placeShipsUI(humanBoard, "board-left");
}
gameLoop();