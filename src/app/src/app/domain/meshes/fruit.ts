import { BoxGeometry, Mesh, MeshNormalMaterial, Vector3 } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Position } from "../interfaces/position";
import { dispose, translate } from "../models/meshes";
import { units } from "../services/gui";

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
