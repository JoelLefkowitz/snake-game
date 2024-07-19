import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Scene } from "three";
import { animate } from "./services/scene";
import { createCameras } from "./services/camera";
import { createRenderer } from "./services/renderer";
import { registerEvents } from "./services/events";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "snake";

  ngOnInit() {
    const scene = new Scene();
    const renderer = createRenderer();
    const camera = createCameras(renderer);

    registerEvents();

    renderer.setAnimationLoop(animate(scene, camera, renderer));
    renderer.domElement.style.width = `${window.innerWidth/2}px`;
    renderer.domElement.style.height = `${window.innerHeight/2}px`;
    document.getElementById("canvas-container").appendChild(renderer.domElement);
  }
}
