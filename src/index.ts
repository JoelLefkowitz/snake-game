import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { animate } from "./geometry";

const scene = new Scene();

const width = window.innerWidth;
const height = window.innerHeight;

const camera = new PerspectiveCamera(75, width / height, 0.1, 100);
camera.position.z = 10;
camera.position.y = 5;

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setAnimationLoop(animate(scene, camera, renderer    ));

document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();
