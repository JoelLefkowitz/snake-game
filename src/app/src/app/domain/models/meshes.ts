import { Mesh, Vector3 } from "three";

export function translate(mesh: Mesh, position: Vector3): void {
  mesh.position.x = position.x;
  mesh.position.y = position.y;
  mesh.position.z = position.z;
}

export function rotate(mesh: Mesh, rotation: Vector3): void {
  mesh.rotation.x = rotation.x;
  mesh.rotation.y = rotation.y;
  mesh.rotation.z = rotation.z;
}

export function dispose(mesh: Mesh): void {
  mesh.geometry.dispose();

  if (Array.isArray(mesh.material)) {
    mesh.material.forEach((material) => {
      material.dispose();
    });
  } else {
    mesh.material.dispose();
  }
}
