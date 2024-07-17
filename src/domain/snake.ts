import {
  BoxGeometry,
  MeshNormalMaterial,
  SphereGeometry,
  Vector3,
} from "three";
import { Snake } from "../models/snake";
import { createMesh } from "../services/meshes";
import { linePanel } from "../services/gui";
import { unit } from "./grid";
import { range } from "lodash";

export const snake = new Snake();

const snakeDimensions = {
  radius: 0.5,
  length: 1,
};

const head: [SphereGeometry, MeshNormalMaterial] = [
  new SphereGeometry(snakeDimensions.radius),
  new MeshNormalMaterial(),
];

const tailPiece: [BoxGeometry, MeshNormalMaterial] = [
  new BoxGeometry(1, 1, 1),
  new MeshNormalMaterial(),
];

const lines = linePanel.lines;

export function tailMesh() {
  return range(0, snake.tail.length).map((i) =>
    createMesh(
      ...tailPiece,
      new Vector3(
        (snake.tail[i].x - lines / 2 + unit / 2) * unit,
        unit,
        (snake.tail[i].y - lines / 2 + unit / 2) * unit,
      ),
      new Vector3(0, 0, 0),
    ),
  );
}

export function snakeMesh() {
  return createMesh(
    ...head,
    new Vector3(
      (snake.head.x - lines / 2 + unit / 2) * unit,
      unit,
      (snake.head.y - lines / 2 + unit / 2) * unit,
    ),
    new Vector3(0, 0, 0),
  );
}
