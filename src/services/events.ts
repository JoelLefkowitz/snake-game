import { Direction } from "../models/directions";
import { camera } from "./camera";
import { snake } from "../domain/snake";

export function registerEvents(): void {
  document.addEventListener("keydown", (event) => {
    console.log(camera.rotation.x);
    if (
      camera.rotation.y > -Math.PI / 4 - Math.PI / 8 &&
      camera.rotation.y < -Math.PI / 4 + Math.PI / 8
    ) {
      console.log("Camera facing: N");
    }
    if (
      camera.rotation.y > -Math.PI * (3 / 4) - Math.PI / 8 &&
      camera.rotation.y < -Math.PI * (3 / 4) + Math.PI / 8
    ) {
      console.log("Camera facing: S");
    }
    if (
      event.key == "d" &&
      (snake.direction == Direction.N || snake.direction == Direction.S)
    ) {
      snake.direction = Direction.E;
    }
    if (
      event.key == "a" &&
      (snake.direction == Direction.N || snake.direction == Direction.S)
    ) {
      snake.direction = Direction.W;
    }
    if (
      event.key == "s" &&
      (snake.direction == Direction.E || snake.direction == Direction.W)
    ) {
      snake.direction = Direction.S;
    }
    if (
      event.key == "w" &&
      (snake.direction == Direction.E || snake.direction == Direction.W)
    ) {
      snake.direction = Direction.N;
    }
  });
}
