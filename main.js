(() => {
  class t {
    constructor(t, e, i, s, r) {
      const h =
        arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      (this.name = t),
        (this.length = e),
        (this.xPos = i),
        (this.yPos = s),
        (this.orientation = r),
        (this.hitCount = h);
    }

    getName() {
      return this.name;
    }

    getLength() {
      return this.length;
    }

    getXPos() {
      return this.xPos;
    }

    getYPos() {
      return this.yPos;
    }

    getOrientation() {
      return this.orientation;
    }

    getHitCount() {
      return this.hitCount;
    }

    isSunk() {
      return this.length === this.hitCount;
    }

    hit() {
      this.hitCount += 1;
    }
  }
  class e {
    constructor(t) {
      (this.size = t),
        (this.tiles = Array.from({ length: t }, () => new Array(t).fill(" "))),
        (this.ships = []);
    }

    getBoard() {
      return this.tiles;
    }

    getSize() {
      return this.size;
    }

    getTile(t, e) {
      return this.tiles[e - 1][t - 1];
    }

    getShips() {
      return this.ships;
    }

    getShipsCount() {
      return this.ships.length;
    }

    setTile(t, e, i) {
      this.tiles[e - 1][t - 1] = i;
    }

    addShip(t) {
      this.ships.push(t);
    }

    isAvailable(t, e, i, s) {
      if (t < 1 || t > this.getSize() || e > this.getSize() || e < 1) return !1;
      if (s === "horizontal") {
        if (t + i - 1 > this.getSize()) return !1;
        for (let s = t; s < t + i - 1; s += 1)
          if (this.getTile(s, e) === "S") return !1;
      } else if (s === "vertical") {
        if (e + i - 1 > this.getSize()) return !1;
        for (let s = e; s < e + i - 1; s += 1)
          if (this.getTile(t, s) === "S") return !1;
      }
      return !0;
    }

    placeShip(e, i, s, r, h) {
      if (this.isAvailable(s, r, i, h)) {
        const n = new t(e, i, s, r, h);
        if ((this.addShip(n), n.getOrientation() === "horizontal"))
          for (let t = n.getXPos(); t < n.getXPos() + n.getLength(); t += 1)
            this.setTile(t, n.getYPos(), "S");
        else if (n.getOrientation() === "vertical")
          for (let t = n.getYPos(); t < n.getYPos() + n.getLength(); t += 1)
            this.setTile(n.getXPos(), t, "S");
      }
    }

    receiveAttack(t, e) {
      this.getTile(t, e) === "S" &&
        this.getShips().forEach((i) => {
          i.getOrientation() === "horizontal"
            ? i.getYPos() === e &&
              i.getXPos() <= t &&
              i.getXPos() + i.getLength() - 1 >= t &&
              i.hit()
            : i.getXPos() === t &&
              i.getYPos() <= e &&
              i.getYPos() + i.getLength() - 1 >= e &&
              i.hit();
        }),
        this.setTile(t, e, "X");
    }

    allShipsSunk() {
      let t = 0;
      return (
        this.getShips().forEach((e) => {
          e.isSunk() && (t += 1);
        }),
        t === this.getShipsCount()
      );
    }
  }
  function i(t) {
    const e = t.getSize() + 1;
    return [
      Math.floor(Math.random() * (e - 1) + 1),
      Math.floor(Math.random() * (e - 1) + 1),
    ];
  }
  const s = new (class {
    constructor(t) {
      this.enemyBoard = new e(t);
    }

    getEnemyBoard() {
      return this.enemyBoard;
    }

    getEnemyTiles() {
      return this.enemyBoard.getBoard();
    }

    play(t, e) {
      this.enemyBoard.getTile(t, e) !== "X" &&
        this.enemyBoard.receiveAttack(t, e);
    }

    playComputer() {
      let t = i(this.enemyBoard);
      for (; this.getEnemyBoard().getTile(...t) === "X"; )
        t = i(this.enemyBoard);
      this.getEnemyBoard().receiveAttack(...t);
    }
  })(5);
  console.log(s.playComputer()), console.log(s.getEnemyTiles());
})();
