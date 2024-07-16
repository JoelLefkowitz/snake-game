import { Scene } from "three";
import { animate } from "./scene";
import { createCameras } from "./camera";
import { createRenderer } from "./renderer";

const scene = new Scene();
const renderer = createRenderer();
const camera = createCameras(renderer);

renderer.setAnimationLoop(animate(scene, camera, renderer));
document.body.appendChild(renderer.domElement);
