import { turn } from "../models/directions";
import { detectDirection } from "./camera";
import { snake } from "../domain/snake";

export function registerEvents(): void {
  document.addEventListener("keydown", (event) => {
    const relative = turn(detectDirection());
    if (
      event.key == "d" &&
      (snake.direction == relative.n || snake.direction == relative.s)
    ) {
      snake.direction = relative.e;
    }
    if (
      event.key == "a" &&
      (snake.direction == relative.n || snake.direction == relative.s)
    ) {
      snake.direction = relative.w;
    }
    if (
      event.key == "s" &&
      (snake.direction == relative.e || snake.direction == relative.w)
    ) {
      snake.direction = relative.s;
    }
    if (
      event.key == "w" &&
      (snake.direction == relative.e || snake.direction == relative.w)
    ) {
      snake.direction = relative.n;
    }
  });
}
