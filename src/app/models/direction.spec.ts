import { Direction, turn } from "./directions";

describe("turn", () => {
  it("shifts the direction", () => {
    expect(turn(Direction.N)).toEqual({
      n: Direction.N,
      e: Direction.E,
      s: Direction.S,
      w: Direction.W,
    });
    expect(turn(Direction.E)).toEqual({
      n: Direction.E,
      e: Direction.S,
      s: Direction.W,
      w: Direction.N,
    });
    expect(turn(Direction.S)).toEqual({
      n: Direction.S,
      e: Direction.W,
      s: Direction.N,
      w: Direction.E,
    });
    expect(turn(Direction.W)).toEqual({
      n: Direction.W,
      e: Direction.N,
      s: Direction.E,
      w: Direction.S,
    });
  });
});
