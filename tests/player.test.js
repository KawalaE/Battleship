import Player from "../src/player";

describe("Player class tests", () => {
  let player = new Player(3);

  beforeEach(() => {
    player = new Player(3);
  });

  describe("define class methods", () => {
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
  describe("test getEnemyBoard", () => {
    test("get the enemy board -> as object", () => {
      const returnValue = player.getEnemyBoard();
      expect(returnValue).toBeInstanceOf(Object);
    });
    describe("test getEnemyTiles", () => {
      test("get the enemy board -> as tiles", () => {
        expect(player.getEnemyTiles()).toEqual([
          [" ", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "],
        ]);
      });
    });
    describe("test play method", () => {
      test("mark as X coordinates given as a parameter", () => {
        player.play(2, 2);
        expect(player.getEnemyTiles()).toEqual([
          [" ", " ", " "],
          [" ", "X", " "],
          [" ", " ", " "],
        ]);
      });
    });
    describe("test playComputer method", () => {
      test("mark as X randomly selected coordinates", () => {
        player.playComputer();
        let shoots = 0;
        const board = player.getEnemyTiles();
        board.forEach((row) => {
          row.forEach((tile) => {
            if (tile === "X") {
              shoots += 1;
            }
          });
        });
        expect(shoots).toBe(1);
      });
    });
  });
});
