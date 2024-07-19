import { Snake } from "./snake";

describe("Snake.step", () => {
  it("steps the snake forward", () => {
    const snake = new Snake({ x: 1, y: 1 }, [{ x: 0, y: 1 }]);
    expect(snake.head).toEqual({ x: 1, y: 1 });
	
    snake.step();
    expect(snake.head).toEqual({ x: 1, y: 2 });
    expect(snake.tail).toEqual([{ x: 1, y: 1 }]);
  });
});
