import { AmbientLight, DirectionalLight } from "three";

export const lights = [
  new DirectionalLight(0xffffff, 3),
  new AmbientLight(0xffffff),
];
