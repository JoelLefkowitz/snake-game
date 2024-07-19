import { Direction } from "../interfaces/directions";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera, Vector3, WebGLRenderer } from "three";

export const camera = new PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  3000,
);
setInterval(() => {
	console.log(camera)
}, 500)
export function createCameras(renderer: WebGLRenderer) {
  camera.position.y = 9
  camera.position.z = 4

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  return camera;
}

export function detectDirection(): Direction {
  const vec = new Vector3();
  const { x, z } = camera.getWorldDirection(vec);

  const angle = (180 * Math.atan2(x, z)) / Math.PI;

  if ((angle < 45 && angle > 0) || (angle > -45 && angle < 0)) {
    return Direction.S;
  }

  if (
    (angle < -180 + 45 && angle > -180) ||
    (angle > 180 - 45 && angle < 180)
  ) {
    return Direction.N;
  }

  if (angle < 90 + 45 && angle > 90 - 45) {
    return Direction.E;
  }

  if (angle < -90 + 45 && angle > -90 - 45) {
    return Direction.W;
  }
}
