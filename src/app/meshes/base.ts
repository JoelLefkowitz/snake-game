import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Panels } from "../interfaces/panels";
import { dimensions } from "./dimensions";
import { dispose } from "../models/meshes";
import { units } from "../services/gui";

export const base = new MeshHandler<Panels>((meshes, panels) => {
  meshes.forEach((mesh) => {
    dispose(mesh);
  });

  const unit = units();
  const { lines } = panels.line;
  const { height } = dimensions.base;

  return [
    new Mesh(
      new BoxGeometry(lines * unit, height, lines * unit),
      new MeshStandardMaterial(panels.material),
    ),
  ];
});
