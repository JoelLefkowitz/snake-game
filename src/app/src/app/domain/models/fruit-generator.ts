import { Position } from "../interfaces/position";

export class FruitGenerator {
	current: Position
	constructor() {
		this.current = this.next()
	}
	next(): Position {
		return {x: 6, y: 6}
	}
}