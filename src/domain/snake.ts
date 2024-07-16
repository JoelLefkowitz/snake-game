import { MeshNormalMaterial, MeshStandardMaterial, SphereGeometry , Vector3} from "three";
import { createMesh } from "../services/meshes";
import { unit } from "./grid";
import {linePanel} from "../services/gui"

const snakeDimensions = {
	radius: 0.25,
	length: 1,
	positions: []
}

export function snakeMesh(x, y) {
	const lines = linePanel.lines
	return createMesh(
	
	new SphereGeometry(snakeDimensions.radius), 
	new MeshNormalMaterial(),
	new Vector3((x-lines/2+unit/2)*unit, unit, (y-lines/2+unit/2)*unit),
	new Vector3(0, 0, 0),
);
}