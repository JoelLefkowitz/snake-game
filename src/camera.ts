import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera, WebGLRenderer } from "three";

export function createCameras(renderer: WebGLRenderer) {
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.z = 10;
  camera.position.y = 5;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  return camera;
}
