function getRandomInt(min, max) {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
}

export default function getRandCoords(board) {
  const randX = getRandomInt(1, board.getSize() + 1);
  const randY = getRandomInt(1, board.getSize() + 1);
  return [randX, randY];
}
