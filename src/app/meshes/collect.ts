import { LinePanel, linePanel, panel, Panel } from "../services/gui";
import { MeshHandler } from "../models/mesh-handler";
import { base, grid } from "./grid";
import { head, tail } from "./snake";

export interface Meshes {
  base: MeshHandler<LinePanel>;
  grid: MeshHandler<Panel>[];
  head: MeshHandler<null>;
  tail: MeshHandler<null>[];
}

export function meshes(): Meshes {
  base.update(linePanel);

  grid.forEach((i) => {
    i.update(panel);
  });

  head.update();

  tail.forEach((i) => {
    i.update();
  });

  return { base, grid, tail, head };
}
