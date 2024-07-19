import GUI from "lil-gui/dist/lil-gui.esm";

const gui = new GUI();

export const materialPanel = {
  color: "#858585",
  emissive: 0.2,
  roughness: 0.65,
  metalness: 0.4,
  wireframe: false,
  clearcoatRoughness: 0.7,
  clearcoat: 0.6,
  fog: true,
  visible: true,
};

gui.addColor(materialPanel, "color");
gui.add(materialPanel, "emissive", 0, 1);
gui.add(materialPanel, "roughness", 0, 1);
gui.add(materialPanel, "metalness", 0, 1);
gui.add(materialPanel, "wireframe");
gui.add(materialPanel, "fog");
gui.add(materialPanel, "visible");

export const linePanel = {
  color: "#858585",
  lines: 12,
};

export const units = () => linePanel.lines / 10;

gui.add(linePanel, "lines", 3, 20);
gui.addColor(linePanel, "color");
