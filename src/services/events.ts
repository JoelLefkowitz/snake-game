import { camera } from "./camera"
import { snake } from "../domain/snake"

export function registerEvents(): void {document.addEventListener('keydown', (event) => {
	console.log(camera.rotation)
	if (event.key == 'd') {
		snake.turnRight()
	}
	if (event.key == 'a') {
		snake.turnLeft()
	}
})}