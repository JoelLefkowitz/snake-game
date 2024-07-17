import { Direction } from "./directions";
export interface Position {
  x: number;
  y: number;
}
export class Snake {
  direction: Direction;
  head: Position;
  tail: Position[];

  constructor(
    head = { x: 4, y: 4 },
    tail = [
      { x: 4, y: 3 },
      { x: 4, y: 2 },
	  {x: 4, y: 1}
    ],
    direction = Direction.S,
  ) {
    this.head = head;
    this.tail = tail;
    this.direction = direction;
  }

  step() {
    const back = this.tail.pop();
    back.x = this.head.x;
    back.y = this.head.y;
    this.tail.unshift(back);
    if (this.direction == Direction.S) {
      this.head.y += 1;
    }
    if (this.direction == Direction.N) {
      this.head.y -= 1;
    }
    if (this.direction == Direction.E) {
      this.head.x += 1;
    }
    if (this.direction == Direction.W) {
      this.head.x -= 1;
    }
  }
}
