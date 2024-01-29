export function getRandCoords(board) {
  const minVal = 1;
  const maxVal = board.getSize() + 1;
  const randX = Math.floor(Math.random() * (maxVal - minVal) + minVal);
  const randY = Math.floor(Math.random() * (maxVal - minVal) + minVal);
  return [randX, randY];
}
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
