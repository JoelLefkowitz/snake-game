import { Direction } from "../models/directions";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PerspectiveCamera, Vector3, WebGLRenderer } from "three";
export const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
export function createCameras(renderer: WebGLRenderer) {
  camera.position.z = 10;
  camera.position.y = 5;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  return camera;
}

export function detectDirection(): Direction {
  const vec = new Vector3();
  const { x, z } = camera.getWorldDirection(vec);

  const angle = (180 * Math.atan2(x, z)) / Math.PI
  console.log(angle)
  if ((angle < 45 && angle > 0)|| (angle > -45 && angle < 0)) {
	console.log('s')
	return Direction.S
  }
  if ((angle < -180+45 && angle > -180) || (angle > 180-45 && angle < 180)) {
	console.log('n')
	return Direction.N
  }
  if ((angle < 90+45 && angle > 90-45)) {
	console.log('e')
	return Direction.E
  }
  if ((angle < -90+45 && angle > -90-45)) {
	console.log('w')
	return Direction.W
  }
}
