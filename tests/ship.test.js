import Ship from "../src/ship";

describe("Ship class tests", () => {
  const carrier = new Ship("Carrier", 5);
  const destroyer = new Ship("Destroyer", 2, 2);

  describe("Test getters", () => {
    test("Gets ships name", () => {
      carrier.getName();
      expect(carrier.getName()).toBe("Carrier");
    });
    test("Gets ships length", () => {
      carrier.getLength();
      expect(carrier.getLength()).toBe(5);
    });
    test("Gets ships hit count", () => {
      carrier.gethitCount();
      expect(carrier.gethitCount()).toBe(0);
    });
  });
  describe("Test class methods", () => {
    test("Registers that the ship has sunk", () => {
      expect(destroyer.isSunk()).toBe(true);
    });
    test("Registers that the ship is afloat", () => {
      expect(carrier.isSunk()).toBe(false);
    });
    test("Changes hit count after hit()", () => {
      carrier.hit();
      expect(carrier.gethitCount()).toBe(1);
    });
  });
});
