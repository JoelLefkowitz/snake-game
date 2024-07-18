import { Mesh, Vector3 } from "three";

export class MeshHandler<T> {
  mesh: Mesh;
  update: (input: T) => MeshHandler<T>;

  constructor(update: (input: T) => MeshHandler<T>, initial: T) {
    this.update = update;
    this.mesh = this.update(initial).mesh;
  }

  translate(position: Vector3): void {
    this.mesh.position.x = position.x;
    this.mesh.position.y = position.y;
    this.mesh.position.z = position.z;
  }

  rotate(rotation: Vector3): void {
    this.mesh.rotation.x = rotation.x;
    this.mesh.rotation.y = rotation.y;
    this.mesh.rotation.z = rotation.z;
  }

  replace(newGeometry, newMaterial) {
    this.mesh.geometry.dispose();
    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach((material) => {
        material.dispose();
      });
    } else {
      this.mesh.material.dispose();
    }
    this.mesh.material = newMaterial;
    this.mesh.geometry = newGeometry;
  }

  dispose() {
    this.mesh.geometry.dispose();

    if (Array.isArray(this.mesh.material)) {
      this.mesh.material.forEach((material) => {
        material.dispose();
      });
    } else {
      this.mesh.material.dispose();
    }
  }
}
