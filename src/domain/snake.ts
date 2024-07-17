import { MeshNormalMaterial, SphereGeometry, Vector3 } from "three";
import { Snake } from "../models/snake";
import { createMesh } from "../services/meshes";
import { linePanel } from "../services/gui";
import { unit } from "./grid";

export const snake = new Snake();

const snakeDimensions = {
  radius: 0.5,
  length: 1,
  positions: [],
};

const head: [SphereGeometry, MeshNormalMaterial] = [
  new SphereGeometry(snakeDimensions.radius),
  new MeshNormalMaterial(),
];

export function snakeMesh() {
  const lines = linePanel.lines;
  return createMesh(
    ...head,
    new Vector3(
      (snake.x - lines / 2 + unit / 2) * unit,
      unit,
      (snake.y - lines / 2 + unit / 2) * unit,
    ),
    new Vector3(0, 0, 0),
  );
}
