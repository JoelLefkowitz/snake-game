import { Mesh } from "three";

export class MeshHandler<T> {
  meshes: Mesh[] = [];
  next: (meshes: Mesh[], input: T) => Mesh[];

  constructor(next: (meshes: Mesh[], input: T) => Mesh[]) {
    this.next = next;
  }

  update(inputs: T): void {
    this.meshes = this.next(this.meshes, inputs);
  }
}
