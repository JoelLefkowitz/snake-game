import { Scene } from "three";
import { animate } from "./services/scene";
import { createCameras } from "./services/camera";
import { createRenderer } from "./services/renderer";
import { registerEvents } from "./services/events";

const scene = new Scene();
const renderer = createRenderer();
const camera = createCameras(renderer);

registerEvents();

renderer.setAnimationLoop(animate(scene, camera, renderer));
document.body.appendChild(renderer.domElement);
