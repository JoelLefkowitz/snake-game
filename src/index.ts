import {
  Vector3,
  PerspectiveCamera,
  Scene,
  CylinderGeometry,
  BoxGeometry,
  WebGLRenderer,
  Mesh,
  MeshNormalMaterial,
  MeshStandardMaterial,
  AmbientLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { range } from "lodash";

const light = new AmbientLight( 0xffffff , 10); // soft white light

const gui = new (window as any).lil.GUI();

const panel = {
  color: "#ff0000",
  emissive: 0.2,
  roughness: 0.5,
  metalness: 0.5,
  wireframe: false,
  fog: false,
  visible: true
};

const linePanel = {
    color: "#ff0000",
  lines: 12,
}

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

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 10;
camera.position.y = 5;

const scene = new Scene();

const baseSize = {
  width: 10,
  height: 1,
};

const lineSize = {
  radius: 0.1,
  length: 10,
};

const unit = baseSize.width / 10;

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

function animate(time) {
  scene.clear();
 const lineMaterial = {...panel, ...linePanel}
scene.add( light );
  range(-linePanel.lines / 2 + 1, linePanel.lines / 2).forEach((i) => {
    addGeometry(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32,
      ),
      new Vector3(0, baseSize.height / 2 - 0.05, i * unit),
      new Vector3(0, 0, Math.PI / 2), new MeshStandardMaterial(lineMaterial)
    );
    addGeometry(
      new CylinderGeometry(
        lineSize.radius,
        lineSize.radius,
        lineSize.length,
        32,
      ),
      new Vector3(unit * i, baseSize.height / 2 - 0.05, 0),
      new Vector3(0, Math.PI / 2, Math.PI / 2), new MeshStandardMaterial(lineMaterial)
    );
  });
  addGeometry(new BoxGeometry(baseSize.width, baseSize.height, baseSize.width));
  renderer.render(scene, camera);
}

function addGeometry(
  geometry,
  position = new Vector3(0, 0, 0),
  rotation = new Vector3(0, 0, 0),
  material =  new MeshStandardMaterial(panel)
) {
  const mesh = new Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  scene.add(mesh);
}
