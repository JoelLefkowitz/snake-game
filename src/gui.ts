const gui = new (window as any).lil.GUI();

export const panel = {
  color: "#858585",
  emissive: 0.2,
  roughness: 0.5,
  metalness: 0.5,
  wireframe: false,
  fog: false,
  visible: true,
};

export const linePanel = {
  color: "#858585",
  lines: 12,
};

gui.add(panel, "lines");
gui.addColor(panel, "color");
gui.add(panel, "emissive", 0, 1);
gui.add(panel, "roughness", 0, 1);
gui.add(panel, "metalness", 0, 1);
gui.add(panel, "wireframe");
gui.add(panel, "fog");
gui.add(panel, "visible");

gui.add(linePanel, "lines");
gui.addColor(linePanel, "color");
