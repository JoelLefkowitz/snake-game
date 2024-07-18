import { CylinderGeometry, Mesh, MeshStandardMaterial, Vector3 } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Panels } from "../interfaces/panels";
import { dimensions } from "./dimensions";
import { dispose, rotate, translate } from "../models/meshes";
import { range } from "lodash";
import { units } from "../services/gui";

export const grid = new MeshHandler<Panels>((meshes, panels) => {
  meshes.forEach((mesh) => {
    dispose(mesh);
  });

  const unit = units();
  const { lines } = panels.line;
  const { radius } = dimensions.line;
  const { height } = dimensions.base;

  return range(-lines / 2 + 1, lines / 2).flatMap((i) => {
    const horizontal = new Mesh(
      new CylinderGeometry(radius, radius, lines * unit, 32),
      new MeshStandardMaterial(panels.material),
    );

    translate(horizontal, new Vector3(0, height / 2 - 0.05, i * unit));
    rotate(horizontal, new Vector3(0, 0, Math.PI / 2));

    const vertical = new Mesh(
      new CylinderGeometry(radius, radius, lines * unit, 32),
      new MeshStandardMaterial(panels.material),
    );

    translate(vertical, new Vector3(unit * i, height / 2 - 0.05, 0));
    rotate(vertical, new Vector3(0, Math.PI / 2, Math.PI / 2));

    return [horizontal, vertical];
  });
});
