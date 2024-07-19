import { WebGLRenderer } from "three";

export function createRenderer(): WebGLRenderer {
  const renderer = new WebGLRenderer({ antialias: true , precision:"highp"});
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true
  renderer.shadowMap.autoUpdate = true
  return renderer;
}
