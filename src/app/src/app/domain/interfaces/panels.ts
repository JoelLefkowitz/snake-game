export interface MaterialPanel {
  color: string;
  emissive: number;
  roughness: number;
  metalness: number;
  wireframe: boolean;
  fog: boolean;
  visible: boolean;
}

export interface LinePanel {
  color: string;
  lines: number;
}

export interface Panels {
  material: MaterialPanel;
  line: LinePanel;
}
