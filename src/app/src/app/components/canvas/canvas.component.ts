import { Component } from '@angular/core';
import { Scene } from 'three';
import { animate } from '../../domain/services/scene';
import { createCameras } from '../../domain/services/camera';
import { createRenderer } from '../../domain/services/renderer';
import { registerEvents } from '../../domain/services/events';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.css'
})
export class CanvasComponent {

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
