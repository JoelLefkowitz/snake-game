import {
  Vector3,
  PerspectiveCamera,
  Scene,
  CylinderGeometry,
  BoxGeometry,
  WebGLRenderer,
  Mesh,
  MeshNormalMaterial,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 10;
camera.position.y = 5;

const scene = new Scene();

const baseSize = {
  width: 10,
  height: 1,
  depth: 10,
};

const lineSize = {
  radius: 0.25,
  length: 10,
};

[1, 2, 3, 4, 5].forEach((i) => {
  addGeometry(
    new CylinderGeometry(lineSize.radius, lineSize.radius, lineSize.length, 32),
    new Vector3(0, baseSize.height / 2, i),
    new Vector3(0, 0, Math.PI / 2),
  );
});

addGeometry(new BoxGeometry(baseSize.width, baseSize.height, baseSize.depth));

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

function animate(time) {
  renderer.render(scene, camera);
}

function addGeometry(
  geometry,
  position = new Vector3(0, 0, 0),
  rotation = new Vector3(0, 0, 0),
  material = new MeshNormalMaterial(),
) {
  const mesh = new Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  scene.add(mesh);
}
