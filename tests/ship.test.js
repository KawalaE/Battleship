import Ship from "../src/ship";

describe("Ship class tests", () => {
  const carrier = new Ship("Carrier", 5, 2, 3, "horizontal");
  const destroyer = new Ship("Destroyer", 2, 7, 5, "vertical", 2);

  describe("test getters", () => {
    test("defines getName", () => {
      expect(typeof carrier.getName).toBe("function");
    });
    test("defines getLength", () => {
      expect(typeof carrier.getLength).toBe("function");
    });
    test("defines getXPos", () => {
      expect(typeof carrier.getXPos).toBe("function");
    });
    test("defines getYPos", () => {
      expect(typeof carrier.getYPos).toBe("function");
    });
    test("defines getOrientation", () => {
      expect(typeof carrier.getOrientation).toBe("function");
    });
    test("defines getHitCount", () => {
      expect(typeof carrier.getHitCount).toBe("function");
    });
    test("gets ships name", () => {
      expect(carrier.getName()).toBe("Carrier");
      expect(destroyer.getName()).toBe("Destroyer");
    });
    test("gets ships length", () => {
      expect(carrier.getLength()).toBe(5);
      expect(destroyer.getLength()).toBe(2);
    });
    test("gets ships x coordinate", () => {
      expect(carrier.getXPos()).toBe(2);
      expect(destroyer.getXPos()).toBe(7);
    });
    test("gets ships y coordinate", () => {
      expect(carrier.getYPos()).toBe(3);
      expect(destroyer.getYPos()).toBe(5);
    });
    test("gets ships orienatation (vertical or horizontal)", () => {
      expect(carrier.getOrientation()).toBe("horizontal");
      expect(destroyer.getOrientation()).toBe("vertical");
    });
    test("gets ships hit count", () => {
      expect(carrier.getHitCount()).toBe(0);
      expect(destroyer.getHitCount()).toBe(2);
    });
  });
  describe("test class methods", () => {
    test("defines isSunk()", () => {
      expect(typeof carrier.isSunk).toBe("function");
    });
    test("defines hit())", () => {
      expect(typeof carrier.hit).toBe("function");
    });
    test("registers that the ship has sunk", () => {
      expect(destroyer.isSunk()).toBe(true);
    });
    test("registers that the ship is afloat", () => {
      expect(carrier.isSunk()).toBe(false);
    });
    test("changes hit count after hit()", () => {
      carrier.hit();
      expect(carrier.getHitCount()).toBe(1);
    });
  });
});
