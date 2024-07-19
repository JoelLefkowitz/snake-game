import { Direction } from "../interfaces/directions";
import { Position } from "../interfaces/position";

export class Snake {
  direction: Direction;

  head: Position;
  tail: Position[];

  constructor(
    head = { x: 4, y: 4 },
    tail = [
      { x: 4, y: 5 },
      { x: 4, y: 4 },
      { x: 4, y: 3 },
      { x: 4, y: 2 },
      { x: 4, y: 1 },
      { x: 4, y: 0 },
    ],
    direction = Direction.S
  ) {
    this.head = head;
    this.tail = tail;
    this.direction = direction;
  }

  step() {
    if (this.head.x === 11 && this.direction == Direction.E
	) {
      this.head.x = 0;
      return;
    }
    if (this.head.x === 0 && this.direction == Direction.W) {
      this.head.x = 11;
      return;
    }
	if (this.head.y === 11 && this.direction == Direction.S) {
		this.head.y = 0
		return
	}
	if (this.head.y === 0 && this.direction == Direction.N) {
		this.head.y = 11
		return
	}
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
