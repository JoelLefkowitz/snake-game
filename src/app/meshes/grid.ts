import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { LinePanel, linePanel, panel } from "../services/gui";
import { MeshHandler } from "../models/mesh-handler";
import { baseSize, lineSize } from "./sizes";
import { range } from "lodash";

export const unit = linePanel.lines / 10;

export const base = new MeshHandler<LinePanel>((linePanel: LinePanel) => {
  base.replace(
    new BoxGeometry(
      linePanel.lines * unit,
      baseSize.height,
      linePanel.lines * unit
    )
  );
  new MeshStandardMaterial(panel);
  return base;
}, linePanel);

export const grid = range(
  -linePanel.lines / 2 + 1,
  linePanel.lines / 2
).flatMap((i) => [
  new MeshHandler(
    new Mesh(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32
      ),
      new MeshStandardMaterial(panel)
    ),
    new Vector3(0, baseSize.height / 2 - 0.05, i * unit),
    new Vector3(0, 0, Math.PI / 2),
    (panel) => {}
  ),

  new MeshHandler(
    new Mesh(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32
      ),
      new MeshStandardMaterial(lineMaterial)
    ),
    new Vector3(unit * i, baseSize.height / 2 - 0.05, 0),
    new Vector3(0, Math.PI / 2, Math.PI / 2)
  ),
]);

// export function makeGridMeshes() {
//   lineSize.length = linePanel.lines * unit;
// }

// export let gridMeshes = makeGridMeshes();

// export function updateBase(scene) {
//   const unit = linePanel.lines / 10;

//   gridMeshes.forEach((mesh) => {
//     scene.remove(scene.getObjectByName(mesh.mesh.id));
//     gridMeshes.shift();
//     mesh.dispose();
//   });

//   gridMeshes = makeGridMeshes();

//   scene.add(baseMesh.mesh);

//   gridMeshes.forEach((gridMesh) => {
//     scene.add(gridMesh.mesh);
//   });

//   baseMesh.replace(
//     new BoxGeometry(
//       linePanel.lines * unit,
//       baseSize.height,
//       linePanel.lines * unit
//     ),
//     new MeshStandardMaterial(panel)
//   );
// }
