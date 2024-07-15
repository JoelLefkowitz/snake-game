import {
  Vector3,
  CylinderGeometry,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  Camera,
  Renderer,
  Scene,
  BufferGeometry,
} from "three";
import { panel, linePanel } from "./gui";
import { range } from "lodash";
import { addLight } from "./light";

const baseSize = {
  width: 10,
  height: 1,
};

const lineSize = {
  radius: 0.1,
  length: 10,
};

const unit = baseSize.width / 10;

export function animate(scene: Scene, camera: Camera, renderer: Renderer) {
  return (_): void => {
    scene.clear();
    addLight(scene);
    const lineMaterial = { ...panel, ...linePanel };
    range(-linePanel.lines / 2 + 1, linePanel.lines / 2).forEach((i) => {
      addGeometry(scene,
        new CylinderGeometry(
          lineSize.radius,
          lineSize.radius,
          lineSize.length,
          32,
        ),
        new Vector3(0, baseSize.height / 2 - 0.05, i * unit),
        new Vector3(0, 0, Math.PI / 2),
        new MeshStandardMaterial(lineMaterial),
      );
      addGeometry(scene,
        new CylinderGeometry(
          lineSize.radius,
          lineSize.radius,
          lineSize.length,
          32,
        ),
        new Vector3(unit * i, baseSize.height / 2 - 0.05, 0),
        new Vector3(0, Math.PI / 2, Math.PI / 2),
        new MeshStandardMaterial(lineMaterial),
      );
    });
    addGeometry(scene,
      new BoxGeometry(baseSize.width, baseSize.height, baseSize.width),
    );
    renderer.render(scene, camera);
  };
}

export function addGeometry(
    scene: Scene,
  geometry: BufferGeometry,
  position: Vector3 = new Vector3(0, 0, 0),
  rotation: Vector3 = new Vector3(0, 0, 0),
  material: MeshStandardMaterial = new MeshStandardMaterial(panel),
): void {
  const mesh = new Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  scene.add(mesh);
}
