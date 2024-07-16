import {
  BoxGeometry,
  BufferGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { linePanel, panel } from "./gui";
import { range } from "lodash";

const baseSize = {
  width: 10,
  height: 1,
};

const lineSize = {
  radius: 0.1,
  length: 10,
};

const unit = baseSize.width / 10;

function createMesh(
  geometry: BufferGeometry,
  position: Vector3 = new Vector3(0, 0, 0),
  rotation: Vector3 = new Vector3(0, 0, 0),
  material: MeshStandardMaterial = new MeshStandardMaterial(panel),
): Mesh {
  const mesh = new Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  return mesh;
}
const lineMaterial = { ...panel, ...linePanel };

const baseMesh = createMesh(
  new BoxGeometry(baseSize.width, baseSize.height, baseSize.width),
);

const gridMeshes = range(-linePanel.lines / 2 + 1, linePanel.lines / 2).flatMap(
  (i) => [
    createMesh(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32,
      ),
      new Vector3(0, baseSize.height / 2 - 0.05, i * unit),
      new Vector3(0, 0, Math.PI / 2),
      new MeshStandardMaterial(lineMaterial),
    ),
    createMesh(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32,
      ),
      new Vector3(unit * i, baseSize.height / 2 - 0.05, 0),
      new Vector3(0, Math.PI / 2, Math.PI / 2),
      new MeshStandardMaterial(lineMaterial),
    ),
  ],
);

export function createMeshes() {
  return [...gridMeshes, baseMesh];
}
