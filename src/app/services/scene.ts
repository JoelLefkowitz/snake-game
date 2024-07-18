import { Camera, Renderer, Scene, Vector3 } from "three";
import { lights } from "./light";
import { lines, snake } from "../meshes/snake";
import { meshes } from "../meshes/collect";
import { unit } from "../meshes/grid";

let elapsed = 0;

export function animate(
  scene: Scene,
  camera: Camera,
  renderer: Renderer
): (frametime: number) => void {
  return (frametime: number) => {
    elapsed += frametime;

    if (elapsed >= 100000) {
      elapsed = 0;
      snake.step();
    }

    const current = meshes();

    const x = (snake.head.x - lines / 2 + unit / 2) * unit;
    const y = (snake.head.y - lines / 2 + unit / 2) * unit;

    // current.head.translate(new Vector3(x, unit, y));

    lights.forEach((light) => {
      scene.add(light);
    });

    scene.add(current.base.mesh);

    current.grid.forEach(({ mesh }) => {
      scene.add(mesh);
    });

    scene.add(current.head.mesh);

    current.tail.forEach(({ mesh }) => {
      scene.add(mesh);
    });

    renderer.render(scene, camera);
  };
}
