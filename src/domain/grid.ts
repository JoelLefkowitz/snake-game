import {
  BoxGeometry,
  CylinderGeometry,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { createMesh} from "../services/meshes";
import { linePanel, panel } from "../services/gui";
import { range } from "lodash";

const baseSize = {
  height: 1,
};

const lineSize = {
  radius: 0.1,
  length: 10,
};

export const unit = linePanel.lines / 10;

const lineMaterial = { ...panel, ...linePanel };

export function baseMesh() { 
	const {lines} = linePanel
	return createMesh(
  new BoxGeometry(lines*unit, baseSize.height, lines*unit),
  new MeshStandardMaterial(panel),
  
);
}
export function gridMeshes(){
	lineSize.length = linePanel.lines*unit
	return range(
  -linePanel.lines / 2 + 1,
  linePanel.lines / 2,
).flatMap((i) => [
  createMesh(
    new CylinderGeometry(lineSize.radius, lineSize.radius, lineSize.length, 32),
    new MeshStandardMaterial(lineMaterial),
    new Vector3(0, baseSize.height / 2 - 0.05, i * unit),
    new Vector3(0, 0, Math.PI / 2),
  ),
  createMesh(
    new CylinderGeometry(lineSize.radius, lineSize.radius, lineSize.length, 32),
    new MeshStandardMaterial(lineMaterial),
    new Vector3(unit * i, baseSize.height / 2 - 0.05, 0),
    new Vector3(0, Math.PI / 2, Math.PI / 2),
  ),
]);}
