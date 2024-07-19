import { Mesh, MeshPhysicalMaterial } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Panels } from "../interfaces/panels";
import { dimensions } from "./dimensions";
import { dispose } from "../models/meshes";
import { units } from "../services/gui";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";

export const base = new MeshHandler<Panels>((meshes, panels) => {
  meshes.forEach((mesh) => {
    dispose(mesh);
  });

  const unit = units();
  const { lines } = panels.line;
  const { height } = dimensions.base;
  
  const mesh = new Mesh(
	new RoundedBoxGeometry(lines * unit + 0.5, height, lines* unit+0.5,8,  0.1),
	new MeshPhysicalMaterial(panels.material),
  )

  mesh.receiveShadow = true;

  return [mesh]
});
