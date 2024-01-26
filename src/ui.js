import Player from "./player";
import "./style.css";

const human = new Player(10);
const computer = new Player(10);

function createSections() {
  // create boards section
  const boardsSection = document.createElement("div");
  boardsSection.classList.add("boards");
  document.body.appendChild(boardsSection);
  // left part
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  boardsSection.appendChild(leftSide);

  // right part
  const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  boardsSection.appendChild(rightSide);
}
function boardTitle(player, sideClass, text, btnText) {
  const titleSection = document.createElement("div");
  titleSection.classList.add("title-sec");
  document.querySelector(`.${sideClass}`).appendChild(titleSection);
  const boardOwner = document.createElement("h1");
  boardOwner.textContent = `${text}`;
  const enemyBoardPointer = document.createElement("button");
  enemyBoardPointer.classList.add(`${player}`);
  if (player === "computer") {
    titleSection.classList.add("computer");
  }
  enemyBoardPointer.textContent = `${btnText}`;
  titleSection.appendChild(boardOwner);
  titleSection.appendChild(enemyBoardPointer);
}
function displayBoard(player, className, sideClass) {
  const tiles = player.getEnemyTiles();
  const board = document.createElement("div");
  board.classList.add(`${className}`);
  document.querySelector(`.${sideClass}`).appendChild(board);
  tiles.forEach((row, y) => {
    row.forEach((cube, x) => {
      const boardCube = document.createElement("div");
      boardCube.id = `{"x": ${x}, "y": ${y}}`;
      boardCube.classList.add("cube");
      board.appendChild(boardCube);
    });
  });
}
function displayShip(length, x, y, orientation) {
  let cube = document.getElementById(`{"x": ${x}, "y": ${y}}`);
  if (orientation === "horizontal") {
    cube.classList.add("ship-start-horizontal");
    for (let i = x + 1; i < x + length - 1; i += 1) {
      cube = document.getElementById(`{"x": ${i}, "y": ${y}}`);
      cube.classList.add("ship-middle-horizontal");
    }
    cube = document.getElementById(`{"x": ${x + length - 1}, "y": ${y}}`);
    cube.classList.add("ship-end-horizontal");
  } else if (orientation === "vertical") {
    cube.classList.add("ship-start-vertical");
    for (let i = y + 1; i < y + length - 1; i += 1) {
      cube = document.getElementById(`{"x": ${x}, "y": ${i}}`);
      cube.classList.add("ship-middle-vertical");
    }
    cube = document.getElementById(`{"x": ${x}, "y": ${y + length - 1}}`);
    cube.classList.add("ship-end-vertical");
  }
}
function displayAllShips(board) {
  const ships = board.getShips();
  const arrIndexOffset = 1;
  ships.forEach((ship) => {
    displayShip(
      ship.getLength(),
      ship.getXPos() - arrIndexOffset,
      ship.getYPos() - arrIndexOffset,
      ship.getOrientation(),
    );
  });
}

createSections();
boardTitle("human", "left-side", "Your board", "Enemy Board ->");
boardTitle("computer", "right-side", "Enemy Board", "<- Your Board");
displayBoard(human, "board-left", "left-side");
displayBoard(computer, "board-right", "right-side");

human.play(1, 1);
computer.playComputer();
let board = computer.getEnemyBoard();
board.placeShip("carrier", 5, 2, 5, "vertical");
displayAllShips(board);
console.log(human.getEnemyTiles());
console.log(computer.getEnemyTiles());
