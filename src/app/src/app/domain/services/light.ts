import { AmbientLight, DirectionalLight } from "three";
const ambient = new AmbientLight("#ffffff", 1)
const directional = new DirectionalLight("#ffffff", 5)
directional.position.set(0, 50, 0)
directional.target.position.set(0, 0, 0)
directional.target.updateMatrixWorld()
directional.castShadow = true;

export const lights = [
 directional, ambient
];
