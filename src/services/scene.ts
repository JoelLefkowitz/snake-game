import { Camera, Renderer, Scene } from "three";
import { createMeshes } from "./meshes";
import { lights } from "./light";
import { snake } from "../domain/snake";


let elapsed = 0;
export function animate(scene: Scene, camera: Camera, renderer: Renderer) {
  return (frameTime): void => {
	elapsed += frameTime
	if (elapsed >= 100000) {
		elapsed = 0;
		snake.step()
	}
    scene.clear();

    lights.forEach((light) => {
      scene.add(light);
    });

    createMeshes().forEach((mesh) => {
      scene.add(mesh);
    });

    renderer.render(scene, camera);
  };
}
