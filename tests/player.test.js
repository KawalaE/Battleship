import Player from "../src/player";
import * as helper from "../src/helper";

describe("Player class tests", () => {
  let player = new Player("opponent", 3);
  let enemyBoard = player.getEnemyBoard();
  let mockRecieveAttack = jest.spyOn(enemyBoard, "receiveAttack");

  beforeEach(() => {
    player = new Player("opponent", 3);
    enemyBoard = player.getEnemyBoard();
    mockRecieveAttack = jest.spyOn(enemyBoard, "receiveAttack");
  });

  describe("define class methods", () => {
    test("define getPlayerName method", () => {
      expect(typeof player.getEnemyName).toBe("function");
    });
    test("define getEnemyBoard method", () => {
      expect(typeof player.getEnemyBoard).toBe("function");
    });
    test("define getEnemyTiles method", () => {
      expect(typeof player.getEnemyTiles).toBe("function");
    });
    test("define play method", () => {
      expect(typeof player.play).toBe("function");
    });
    test("define playComputer method", () => {
      expect(typeof player.playComputer).toBe("function");
    });
  });
  describe("test class getters", () => {
    test("get the enemy name", () => {
      expect(player.getEnemyName()).toBe("opponent");
    });
    test("get the enemy board -> as object", () => {
      const returnValue = player.getEnemyBoard();
      expect(returnValue).toBeInstanceOf(Object);
    });
    test("get the enemy board -> as tiles", () => {
      expect(player.getEnemyTiles()).toEqual([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ]);
    });
  });
  describe("test class methods", () => {
    describe("test play method", () => {
      test("invokes receiveAttack if place was not attacked yet", () => {
        player.play(1, 1);
        expect(mockRecieveAttack).toHaveBeenCalled();
      });
      test("does not invoke receiveAttack when place was already attacked", () => {
        enemyBoard.setTile(2, 2, "X");
        player.play(2, 2);
        expect(mockRecieveAttack).not.toHaveBeenCalled();
      });
    });
    describe("test playComputer method", () => {
      test("invokes getRandCoords function", () => {
        const getRandCoordsMock = jest.spyOn(helper, "getRandCoords");
        player.playComputer();
        expect(getRandCoordsMock).toHaveBeenCalled();
      });
      test("invokes receiveAttack", () => {
        player.playComputer();
        expect(mockRecieveAttack).toHaveBeenCalled();
      });
      test("returns an array data structure", () => {
        const returnValue = player.playComputer();
        expect(returnValue).toBeInstanceOf(Array);
      });
      test("cooridinates are in range of 1 - board size", () => {
        const returnValue = player.playComputer();
        expect(returnValue[0]).toBeLessThanOrEqual(3);
        expect(returnValue[1]).toBeLessThanOrEqual(3);
        expect(returnValue[0]).toBeGreaterThanOrEqual(1);
        expect(returnValue[1]).toBeGreaterThanOrEqual(1);
      });
    });
  });
});
