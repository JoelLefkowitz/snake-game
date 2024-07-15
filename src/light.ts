import {
    Scene,
    DirectionalLight,
    AmbientLight
  } from "three";

export function addLight(scene: Scene): void {
    const directionalLight = new DirectionalLight( 0xffffff, 3 );
    scene.add( directionalLight );
    const ambientLight = new AmbientLight( 0xffffff );
    scene.add( ambientLight );
}