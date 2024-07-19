import { BoxGeometry, Color, Mesh, MeshPhysicalMaterial, Vector3 } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Position } from "../interfaces/position";
import { dispose, translate } from "../models/meshes";
import { units } from "../services/gui";
import { Panels } from "../interfaces/panels";

export const fruit = new MeshHandler<{position: Position | null, panels: Panels}>((meshes, {position, panels}) => {
	meshes.forEach((mesh) => {
	  dispose(mesh);
	});

	if (position == null) {
		return []
	}
  
	const unit = units();
	const material = new MeshPhysicalMaterial(panels.material)
	material.color = new Color(255,0,0)
	const mesh =
	  new Mesh(
		new BoxGeometry(0.8, 0.8, 0.8),
		material
	  );

	translate(mesh, new Vector3(position.x/2*unit, unit, position.y/2*unit))

	mesh.castShadow = true
	mesh.receiveShadow = false

	return [mesh]
  });
