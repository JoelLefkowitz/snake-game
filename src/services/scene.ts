import { Camera, Renderer, Scene } from "three";
import { createMeshes } from "./meshes";
import { lights } from "./light";

export function animate(scene: Scene, camera: Camera, renderer: Renderer) {
  return (_): void => {
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
