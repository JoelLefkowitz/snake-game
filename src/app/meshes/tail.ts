import { BoxGeometry, Mesh, MeshNormalMaterial, Vector3 } from "three";
import { MeshHandler } from "../models/mesh-handler";
import { Panels } from "../interfaces/panels";
import { Position } from "../interfaces/position";
import { dispose, translate } from "../models/meshes";
import { units } from "../services/gui";

export const tail = new MeshHandler<{ panels: Panels; positions: Position[] }>(
  (meshes, { panels, positions }) => {
    meshes.forEach((mesh) => {
      dispose(mesh);
    });

    const unit = units();
    const { lines } = panels.line;

    return positions.map((position) => {
      const mesh = new Mesh(new BoxGeometry(1, 1, 1), new MeshNormalMaterial());

      const x = (position.x - lines / 2 + unit / 2) * unit;
      const y = (position.y - lines / 2 + unit / 2) * unit;

      translate(mesh, new Vector3(x, unit, y));

      return mesh;
    });
  },
);
