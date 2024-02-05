import "./style.css";

function createFavicon() {
  const head = document.querySelector("head");
  const favicon = document.createElement("link");
  favicon.classList.add("favicon");
  head.append(favicon);
}

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
function boardTitle(player, sideClass, text) {
  const titleSection = document.createElement("div");
  titleSection.classList.add("title-sec");
  document.querySelector(`.${sideClass}`).appendChild(titleSection);
  const boardOwner = document.createElement("h1");
  boardOwner.textContent = `${text}`;
  titleSection.appendChild(boardOwner);
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
export function insertFleet(
  board,
  boardClass,
  cube,
  fleet,
  boardUI,
  startGameCall,
) {
  const informator = document.querySelector(".informator");
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
  if (board.getShipsCount() === 5) {
    document.querySelector(".board-left").classList.add("disable");
    startGameCall();
  }
}
export function placeShipsUI(board, boardClass, startGameCall) {
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
      insertFleet.bind(
        null,
        board,
        boardClass,
        cube,
        shipsInfo,
        boardUI,
        startGameCall,
      ),
    );
  }
}
function getCubeById(boardClass, idMatch) {
  let choosenCube;
  const boardUI = document.getElementsByClassName(`${boardClass}`)[0].children;
  // eslint-disable-next-line no-restricted-syntax
  for (const cube of boardUI) {
    if (cube.id === idMatch) {
      choosenCube = cube;
    }
  }
  return choosenCube;
}
function removeShipClass(element) {
  const shipClasses = [
    "ship-middle-vertical",
    "ship-end-vertical",
    "ship-start-vertical",
    "ship-middle-horizontal",
    "ship-end-horizontal",
    "ship-start-horizontal",
  ];
  shipClasses.forEach((classElement) => {
    if (element.classList.contains(classElement)) {
      element.classList.remove(classElement);
    }
  });
}
function setHitOrMiss(board, element, xPos, yPos) {
  const informator = document.querySelector(".informator");
  if (board.getTile(xPos, yPos) === "S") {
    if (board.getBoardName() === "humanBoard") {
      informator.textContent = `You have been hit!`;
      removeShipClass(element);
    } else if (board.getBoardName() === "computerBoard") {
      informator.textContent = `Enemy has been hit, well done!`;
    }
    element.classList.add("hit");
  } else {
    if (board.getBoardName() === "humanBoard") {
      informator.textContent = `Enemy has missed!`;
    } else {
      informator.textContent = `You have missed!`;
    }
    element.classList.add("miss");
  }
  element.classList.add("clicked");
  if (board.getBoardName() === "computerBoard") {
    board.receiveAttack(xPos, yPos);
  }
  board.setTile(xPos, yPos, "X");
}

function enemyAttackHandler(board, cube) {
  const currentCube = cube.id;
  const clickedX = JSON.parse(currentCube).x + 1;
  const clickedY = JSON.parse(currentCube).y + 1;
  setHitOrMiss(board, cube, clickedX, clickedY);
}
export function attackHumanUI(board, computer, boardClass) {
  const informator = document.querySelector(".informator");
  informator.textContent = `Enemy attacks you!`;
  const coordinates = computer.playComputer();
  const attackedX = coordinates[0];
  const attackedY = coordinates[1];
  const currentCube = getCubeById(
    boardClass,
    `{"x": ${attackedX - 1}, "y": ${attackedY - 1}}`,
  );
  setHitOrMiss(board, currentCube, attackedX, attackedY);
}

export function attackEnemyUI(board, boardClass) {
  const informator = document.querySelector(".informator");
  informator.textContent = `Attack enemy!`;
  const boardUI = document.getElementsByClassName(`${boardClass}`)[0].children;
  // eslint-disable-next-line no-restricted-syntax
  for (const cube of boardUI) {
  // eslint-disable-next-line no-loop-func
  cube.addEventListener("click", () => enemyAttackHandler(board, cube));
  }
}
export function playAgain() {
  const gameInfo = document.querySelector(".game-info");
  const replayBtn = document.createElement("button");
  replayBtn.classList.add("replay");
  replayBtn.classList.add("rotate");
  replayBtn.textContent = "Play again!";
  gameInfo.appendChild(replayBtn);

  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
export function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const name = document.createElement("p");
  name.classList.add("footer-name");
  name.textContent = "KawalaE";
  const icon = document.createElement("img");
  icon.classList.add("icon");
  footer.append(name, icon);
  document.body.appendChild(footer);

  icon.addEventListener("click", () => {
    window.location = "https://github.com/KawalaE/Battleship";
  });
}
createFavicon();
displayInfomator();
createSections();
boardTitle("human", "left-side", "Your board");
boardTitle("computer", "right-side", "Enemy Board");
