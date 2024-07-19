import { Direction, RelativeDirections } from "../interfaces/directions";

export function turn(cameraDirection: Direction): RelativeDirections {
  const directions = [Direction.N, Direction.E, Direction.S, Direction.W];

  if (cameraDirection == Direction.W) {
    directions.unshift(directions.pop());
  }
  if (cameraDirection == Direction.E) {
    directions.push(directions.shift());
  }
  if (cameraDirection == Direction.S) {
    directions.unshift(directions.pop());
    directions.unshift(directions.pop());
  }

  const [n, e, s, w] = directions;
  return { n, e, s, w };
}
