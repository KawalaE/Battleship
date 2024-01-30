import "./style.css";

function createSections() {
  const boardsSection = document.createElement("div");
  boardsSection.classList.add("boards");
  document.body.appendChild(boardsSection);
  const leftSide = document.createElement("div");
  leftSide.classList.add("left-side");
  boardsSection.appendChild(leftSide);
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
function displayInfomator() {
  const gameInfo = document.createElement("div");
  gameInfo.classList.add("game-info");
  document.body.appendChild(gameInfo);
  const informator = document.createElement("div");
  informator.classList.add("informator");
  informator.textContent = "Info about current game loop status";
  const rotateBtn = document.createElement("button");
  rotateBtn.classList.add("rotate");
  rotateBtn.textContent = "Horizontal";
  rotateBtn.addEventListener("click", () => {
    if (rotateBtn.textContent === "Horizontal") {
      rotateBtn.textContent = "Vertical";
    } else rotateBtn.textContent = "Horizontal";
  });
  gameInfo.appendChild(informator);
  gameInfo.appendChild(rotateBtn);
}
export function displayBoard(player, className, sideClass) {
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
export function getCube(boardClass, idInfo) {
  const board = document.getElementsByClassName(`${boardClass}`)[0].children;
  let cube;
  // eslint-disable-next-line no-restricted-syntax
  for (const currCube of board) {
    if (currCube.id === idInfo) {
      cube = currCube;
    }
  }
  return cube;
}
export function displayShip(length, x, y, orientation, boardClass) {
  let cube = getCube(boardClass, `{"x": ${x}, "y": ${y}}`);
  if (orientation === "horizontal") {
    cube.classList.add("ship-start-horizontal");
    for (let i = x + 1; i < x + length - 1; i += 1) {
      cube = getCube(boardClass, `{"x": ${i}, "y": ${y}}`);
      cube.classList.add("ship-middle-horizontal");
    }
    cube = getCube(boardClass, `{"x": ${x + length - 1}, "y": ${y}}`);
    cube.classList.add("ship-end-horizontal");
  } else if (orientation === "vertical") {
    cube.classList.add("ship-start-vertical");
    for (let i = y + 1; i < y + length - 1; i += 1) {
      cube = getCube(boardClass, `{"x": ${x}, "y": ${i}}`);
      cube.classList.add("ship-middle-vertical");
    }
    cube = getCube(boardClass, `{"x": ${x}, "y": ${y + length - 1}}`);
    cube.classList.add("ship-end-vertical");
  }
}
export function displayAllShips(board, boardClass) {
  const ships = board.getShips();
  const arrIndexOffset = 1;
  ships.forEach((ship) => {
    displayShip(
      ship.getLength(),
      ship.getXPos() - arrIndexOffset,
      ship.getYPos() - arrIndexOffset,
      ship.getOrientation(),
      boardClass,
    );
  });
}
export function insertFleet(board, boardClass, cube, fleet, boardUI) {
  if (board.getShipsCount() === 5) {
    // eslint-disable-next-line no-restricted-syntax
    for (const c of boardUI) {
      c.removeEventListener("click", insertFleet);
    }
    return;
  }

  const orienatation = document
    .querySelector(".rotate")
    .textContent.toLocaleLowerCase();

  const currentCube = cube.id;
  const clickedX = JSON.parse(currentCube).x;
  const clickedY = JSON.parse(currentCube).y;

  if (
    board.getShipsCount() < 4 &&
    board.isAvailable(
      clickedX + 1,
      clickedY + 1,
      fleet[board.getShipsCount()].length,
      orienatation,
    )
  ) {
    const informator = document.querySelector(".informator");
    informator.textContent = `Please place ${fleet[board.getShipsCount() + 1].name} of length ${fleet[board.getShipsCount() + 1].length}.`;
  }

  board.placeShip(
    fleet[board.getShipsCount()].name,
    fleet[board.getShipsCount()].length,
    clickedX + 1,
    clickedY + 1,
    orienatation,
  );
  displayAllShips(board, boardClass);
}
export function placeShipsUI(board, boardClass) {
  const boardUI = document.getElementsByClassName(`${boardClass}`)[0].children;
  // eslint-disable-next-line no-restricted-syntax
  const shipsInfo = [
    { name: "carrier", length: 5 },
    { name: "battleship", length: 4 },
    { name: "cruiser", length: 3 },
    { name: "submarine", length: 3 },
    { name: "destroyer", length: 2 },
  ];
  const informator = document.querySelector(".informator");
  informator.textContent = `Please place ${shipsInfo[0].name} of length ${shipsInfo[0].length}.`;
  // eslint-disable-next-line no-restricted-syntax
  for (const cube of boardUI) {
    // eslint-disable-next-line no-loop-func
    cube.addEventListener(
      "click",
      insertFleet.bind(null, board, boardClass, cube, shipsInfo, boardUI),
    );
  }
}

displayInfomator();
createSections();
boardTitle("human", "left-side", "Your board", "Enemy Board ->");
boardTitle("computer", "right-side", "Enemy Board", "<- Your Board");
