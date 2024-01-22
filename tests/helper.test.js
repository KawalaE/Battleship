import getRandCoords from "../src/helper";
import Gameboard from "../src/gameboard";

describe("test helper module function", () => {
  let gameboard = new Gameboard(3);
  beforeEach(() => {
    gameboard = new Gameboard(3);
  });

  test("define getRandCoords function", () => {
    expect(typeof getRandCoords).toBe("function");
  });
  test("invoke Gameboard class method -> getSize()", () => {
    const getSizeMock = jest.spyOn(gameboard, "getSize");
    getRandCoords(gameboard);
    expect(getSizeMock).toHaveBeenCalled();
  });
  test("return an array", () => {
    const returnVal = getRandCoords(gameboard);
    expect(returnVal).toBeInstanceOf(Array);
  });
  test("return numbers in range of 1 - board size", () => {
    expect(getRandCoords(gameboard)[0]).toBeLessThanOrEqual(3);
    expect(getRandCoords(gameboard)[1]).toBeGreaterThanOrEqual(1);
  });
});
