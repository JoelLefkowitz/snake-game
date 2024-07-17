import { Direction } from "./directions";

export class Snake {
  x: number;
  y: number;
  direction: Direction;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = Direction.S;
  }

  step() {
    if (this.direction == Direction.S) {
      this.y += 1;
    }
    if (this.direction == Direction.N) {
      this.y -= 1;
    }
    if (this.direction == Direction.E) {
      this.x += 1;
    }
    if (this.direction == Direction.W) {
      this.x -= 1;
    }
  }
}
