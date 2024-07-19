import { BoxGeometry, Mesh, MeshNormalMaterial, MeshStandardMaterial, Vector3 } from "three";
import { Panels } from "../interfaces/panels";
import { Position } from "../interfaces/position";
import { MeshHandler } from "../models/mesh-handler";
import { dispose, translate } from "../models/meshes";
import { units } from "../services/gui";
import { dimensions } from "./dimensions";

export const fruit = new MeshHandler<Position | null>((meshes, position) => {
	meshes.forEach((mesh) => {
	  dispose(mesh);
	});

	if (position == null) {
		return []
	}
  
	const unit = units();
  
	const mesh =
	  new Mesh(
		new BoxGeometry(1, 1, 1),
		new MeshNormalMaterial,
	  );

	translate(mesh, new Vector3(position.x*unit, unit, position.y*unit))

	return [mesh]
  });
