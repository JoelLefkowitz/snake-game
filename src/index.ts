import { Scene } from "three";
import { animate } from "./services/scene";
import { createCameras } from "./services/camera";
import { createRenderer } from "./services/renderer";

const scene = new Scene();
const renderer = createRenderer();
const camera = createCameras(renderer);

renderer.setAnimationLoop(animate(scene, camera, renderer));
document.body.appendChild(renderer.domElement);
