import { getRandCoords, getRandomInt } from "../src/helper";
import Gameboard from "../src/gameboard";

describe("test helper functions", () => {
  let gameboard = new Gameboard("computerBaord", 3);
  beforeEach(() => {
    gameboard = new Gameboard("computerBaord", 3);
  });
  describe("test getRandCoords", () => {
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
  describe("test getRandomInt", () => {
    test("define getRandomInt function", () => {
      expect(typeof getRandomInt).toBe("function");
    });
    test("get random value in range of 0 - max (max is not included)", () => {
      expect(getRandomInt(3)).toBeLessThanOrEqual(3);
      expect(getRandomInt(3)).toBeGreaterThanOrEqual(0);
    });
  });
});
