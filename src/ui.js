import Player from "./player";
import "./style.css";

const human = new Player(10);
const computer = new Player(10);
console.log(human.getEnemyTiles());
console.log(computer.getEnemyTiles());

function createSections() {
  //create boards section
  const boardsSection = document.createElement("div");
  boardsSection.classList.add("boards");
  document.body.appendChild(boardsSection);
  //left part
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  boardsSection.appendChild(leftSide);

  //right part
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  boardsSection.appendChild(rightSide);
}
function displayBoard(player, className, sideClass) {
  const tiles = player.getEnemyTiles();
  const board = document.createElement("div");
	board.classList.add(`${className}`);
  document.querySelector(`${sideClass}`).appendChild(board);
  tiles.forEach((row, y) => {
    row.forEach((cube, x) => {
      const boardCube = document.createElement("div");
      boardCube.id = `{"x": ${x}, "y": ${y}}`;
			boardCube.classList.add("cube");
			board.appendChild(boardCube);
      console.log(x, y);
    });
	})
}
createSections();
displayBoard(human, "board-left", ".left-side");
displayBoard(computer, "board-right", ".right-side");
