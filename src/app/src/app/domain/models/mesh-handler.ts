import { Mesh } from "three";
import { Position } from "../interfaces/position";

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

export const isOverlapping = (first: Position, second: Position): boolean => (first.x === second.x) && (first.y === second.y)

