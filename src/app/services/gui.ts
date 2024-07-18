import GUI from "lil-gui/dist/lil-gui.esm";

const gui = new GUI();

export interface Panel {
	color : string
	emissive: number
	roughness: number
	metalness: number
	wireframe: boolean
	fog: boolean
	visible: boolean
}

export const panel = {
  color: "#858585",
  emissive: 0.2,
  roughness: 0.5,
  metalness: 0.5,
  wireframe: false,
  fog: false,
  visible: true,
};

export interface LinePanel {
  color: string;
  lines: number;
}

export const linePanel = {
  color: "#858585",
  lines: 12,
};

gui.addColor(panel, "color");
gui.add(panel, "emissive", 0, 1);
gui.add(panel, "roughness", 0, 1);
gui.add(panel, "metalness", 0, 1);
gui.add(panel, "wireframe");
gui.add(panel, "fog");
gui.add(panel, "visible");

gui.add(linePanel, "lines", 3, 20);
gui.addColor(linePanel, "color");
