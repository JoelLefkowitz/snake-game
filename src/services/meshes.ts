import { BufferGeometry, Material, Mesh, Vector3 } from "three";
import { baseMesh, gridMeshes } from "../domain/grid";
import { snakeMesh } from "../domain/snake";

export function createMesh(
  geometry: BufferGeometry,
  material: Material,
  position: Vector3 = new Vector3(0, 0, 0),
  rotation: Vector3 = new Vector3(0, 0, 0),
): Mesh {
  const mesh = new Mesh(geometry, material);
  mesh.position.set(position.x, position.y, position.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);
  return mesh;
}

export function createMeshes() {
  return [...gridMeshes(), baseMesh(), snakeMesh()];
}
