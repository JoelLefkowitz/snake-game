import { Mesh, MeshStandardMaterial, SphereGeometry, Vector3 } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Panels } from "../interfaces/panels";
import { Position } from "../interfaces/position";
import { Snake } from "../models/snake";
import { dimensions } from "./dimensions";
import { dispose, translate } from "../models/meshes";
import { units } from "../services/gui";

export const snake = new Snake();

export const head = new MeshHandler<{ panels: Panels; position: Position }>(
  (meshes, { panels, position }) => {
    meshes.forEach((mesh) => {
      dispose(mesh);
    });

    const unit = units();
    const { lines } = panels.line;

    const mesh = new Mesh(
      new SphereGeometry(dimensions.snake.radius),
      new MeshStandardMaterial(),
    );

    const x = (position.x - lines / 2 + unit / 2) * unit;
    const y = (position.y - lines / 2 + unit / 2) * unit;

    translate(mesh, new Vector3(x, unit, y));

    return [mesh];
  },
);
