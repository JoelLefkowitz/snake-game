import { Camera, Renderer, Scene } from "three";
import { FruitGenerator } from "../models/fruit-generator";
import { base } from "../meshes/base";
import { fruit } from "../meshes/fruit";
import { grid } from "../meshes/grid";
import { head, snake } from "../meshes/head";
import { isOverlapping } from "../models/mesh-handler";
import { lights } from "./light";
import { linePanel, materialPanel } from "./gui";
import { tail } from "../meshes/tail";

let elapsed = 0;
let lastFrametime = 0;

const fruitGenerator = new FruitGenerator()

export function animate(
  scene: Scene,
  camera: Camera,
  renderer: Renderer,
): (frametime: number) => void {
  return (frametime: number) => {
    elapsed += frametime - lastFrametime;
    lastFrametime = frametime;

    if (elapsed >= 100) {
      elapsed = 0;
      snake.step(isOverlapping(snake.head, fruitGenerator.current))
    }

    const panels = {
      material: materialPanel,
      line: linePanel,
    };

    base.update(panels);
    grid.update(panels);

    head.update({ panels, position: snake.head });
    tail.update({ panels, positions: snake.tail });

	fruit.update({position: fruitGenerator.current, panels})

    scene.clear();

    lights.forEach((light) => scene.add(light));

    [base, grid, head, tail, fruit].forEach((handler) =>
      handler.meshes.forEach((mesh) => scene.add(mesh)),
    );

    renderer.render(scene, camera);
  };
}
