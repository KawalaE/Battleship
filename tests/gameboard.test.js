import Gameboard from "../src/gameboard";
import Ship from "../src/ship";

describe("Gameboard class tests", () => {
  let gameboard = new Gameboard("computerBoard", 3);
  let largerBoard = new Gameboard("computerBoard", 10);
  beforeEach(() => {
    gameboard = new Gameboard("computerBoard", 3);
    largerBoard = new Gameboard("computerBoard", 10);
  });

  describe("define class methods", () => {
    test("define getBoardName", () => {
      expect(typeof gameboard.getBoardName).toBe("function");
    });
    test("defines getBoard", () => {
      expect(typeof gameboard.getBoard).toBe("function");
    });
    test("defines getSize", () => {
      expect(typeof gameboard.getSize).toBe("function");
    });
    test("defines getTile", () => {
      expect(typeof gameboard.getTile).toBe("function");
    });
    test("defines getShips", () => {
      expect(typeof gameboard.getShips).toBe("function");
    });
    test("defines getShipsCount", () => {
      expect(typeof gameboard.getShipsCount).toBe("function");
    });
    test("defines setTile", () => {
      expect(typeof gameboard.setTile).toBe("function");
    });
    test("defines addShip", () => {
      expect(typeof gameboard.addShip).toBe("function");
    });
    test("defines isAvailable", () => {
      expect(typeof gameboard.isAvailable).toBe("function");
    });
    test("defines placeShip", () => {
      expect(typeof gameboard.placeShip).toBe("function");
    });
    test("defines receiveAttack", () => {
      expect(typeof gameboard.receiveAttack).toBe("function");
    });
    test("defines allShipsSunk", () => {
      expect(typeof gameboard.allShipsSunk).toBe("function");
    });
    test("defines placeRandomShips", () => {
      expect(typeof gameboard.placeRandomShips).toBe("function");
    });
  });

  describe("test getters, setters and adding ship", () => {
    const carrier = new Ship("carrier", 5, 1, 2, "horizontal");
    test("returns name of the gameboard", () => {
      expect(gameboard.getBoardName()).toEqual("computerBoard");
    });
    test("returns gameboard array", () => {
      expect(gameboard.getBoard()).toEqual([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ]);
    });
    test("returns size of gameboard", () => {
      expect(gameboard.getSize()).toEqual(3);
    });
    test("returns tile status 'S/empty/X'", () => {
      expect(gameboard.getTile(1, 1)).toEqual(" ");
      gameboard.setTile(2, 1, "S");
      expect(gameboard.getTile(2, 1)).toEqual("S");
      gameboard.setTile(3, 3, "X");
      expect(gameboard.getTile(3, 3)).toEqual("X");
    });
    test("returns current ships", () => {
      gameboard.addShip(carrier);
      expect(gameboard.getShips()).toEqual([
        {
          hitCount: 0,
          name: "carrier",
          length: 5,
          xPos: 1,
          yPos: 2,
          orientation: "horizontal",
        },
      ]);
    });
    test("returns count of ships on gameboard", () => {
      expect(gameboard.getShipsCount()).toEqual(0);
      gameboard.addShip(carrier);
      expect(gameboard.getShipsCount()).toEqual(1);
    });
  });

  describe("test complex class methods", () => {
    describe("test isAvailable method", () => {
      test("determines if place is available", () => {
        expect(gameboard.isAvailable(4, 1, 2, "vertical")).toBe(false);
        expect(gameboard.isAvailable(3, 1, 2, "horizontal")).toBe(false);
        gameboard.setTile(1, 1, "S");
        expect(gameboard.isAvailable(1, 1, 2, "horizontal")).toBe(false);
        expect(gameboard.isAvailable(3, 3, 1, "vertical")).toBe(true);
      });
    });
    describe("test placeShip method", () => {
      test("calls isAvailable method", () => {
        const mockIsAvailable = jest.spyOn(gameboard, "isAvailable");
        gameboard.placeShip("destroyer", 2, 1, 1, "horizontal");
        expect(mockIsAvailable).toHaveBeenCalledWith(1, 1, 2, "horizontal");
      });
      test("calls addShip method", () => {
        const mockAddShip = jest.spyOn(gameboard, "addShip");
        gameboard.placeShip("destroyer", 2, 1, 1, "horizontal");
        expect(mockAddShip).toHaveBeenCalled();
        mockAddShip.mockReset();
        gameboard.placeShip("destroyer", 4, 1, 1, "horizontal");
        expect(mockAddShip).not.toHaveBeenCalled();
      });
      test("placeShip places ship", () => {
        expect(gameboard.getTile(1, 1)).toBe(" ");
        expect(gameboard.getTile(1, 2)).toBe(" ");
        gameboard.placeShip("destroyer", 2, 1, 1, "horizontal");
        expect(gameboard.getTile(1, 1)).toBe("S");
        expect(gameboard.getTile(2, 1)).toBe("S");
      });
    });
    describe("test receiveAttack method", () => {
      test("hits the ship", () => {
        gameboard.placeShip("destroyer", 2, 3, 1, "vertical");
        const shipObject = gameboard.getShips()[gameboard.getShipsCount() - 1];
        const mockHit = jest.spyOn(shipObject, "hit");
        gameboard.receiveAttack(3, 1);
        expect(mockHit).toHaveBeenCalled();
      });
    });
    describe("test allShipSunk method", () => {
      test("checks if all ships have sunk", () => {
        gameboard.placeShip("destroyer", 2, 3, 1, "vertical");
        gameboard.placeShip("destroyer", 2, 1, 2, "horizontal");
        expect(gameboard.allShipsSunk()).toBe(false);
        gameboard.receiveAttack(3, 1);
        gameboard.receiveAttack(3, 2);
        gameboard.receiveAttack(1, 2);
        gameboard.receiveAttack(2, 2);
        expect(gameboard.allShipsSunk()).toBe(true);
      });
    });
    describe("test placeEnemyShips method", () => {
      test("checks if number of ships increases after invoking", () => {
        expect(largerBoard.getShipsCount()).toBe(0);
        largerBoard.placeRandomShips();
        expect(largerBoard.getShipsCount()).toBe(5);
      });
    });
  });
});
