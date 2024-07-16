export enum Direction {
	N, S, E, W
}

export class Snake {
	x: number
	y: number
	direction: Direction

	constructor() {
		this.x = 0
		this.y = 0
		this.direction = Direction.S
	}

	step() {
		if (this.direction == Direction.N) {
			this.y += 1
		}
		if (this.direction == Direction.S) {
			this.y -= 1
		}
		if (this.direction == Direction.E) {
			this.x += 1
		}
		if (this.direction == Direction.W) {
			this.x -= 1 
		}
	}
	
	turnRight() {
		if (this.direction == Direction.N) {
			this.direction = Direction.W
		} else if (this.direction == Direction.W) {
			this.direction = Direction.S
		}else if (this.direction == Direction.S) {
			this.direction = Direction.E
		}else if (this.direction == Direction.E) {
			this.direction = Direction.N
		}
	}
	turnLeft() {
		if (this.direction == Direction.S) {
			this.direction = Direction.W
		} else if (this.direction == Direction.W) {
			this.direction = Direction.N
		}else if (this.direction == Direction.N) {
			this.direction = Direction.E
		}else if (this.direction == Direction.E) {
			this.direction = Direction.S
		}
	}
}