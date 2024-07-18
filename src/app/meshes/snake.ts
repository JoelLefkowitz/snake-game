import { MeshHandler } from "../models/mesh-handler";
import { Snake } from "../models/snake";
import { linePanel } from "../services/gui";

export const snake = new Snake();

export const lines = linePanel.lines;

export const head = new MeshHandler();
export const tail = [new MeshHandler()];

// const head: [SphereGeometry, MeshNormalMaterial] = [
//   new SphereGeometry(snakeDimensions.radius),
//   new MeshNormalMaterial(),
// ];

// // const tailPiece: [BoxGeometry, MeshNormalMaterial] = [
// //   new BoxGeometry(1, 1, 1),
// //   new MeshNormalMaterial(),
// // ];

// // export const tailMesh {
// //   range(0, snake.tail.length).map((i) =>
// //     createMesh(
// //       ...tailPiece,
// //       new Vector3(
// //         (snake.tail[i].x - lines / 2 + unit / 2) * unit,
// //         unit,
// //         (snake.tail[i].y - lines / 2 + unit / 2) * unit,
// //       ),
// //       new Vector3(0, 0, 0),
// //     ),
// //   );
// // }

// export const snakeHeadMesh = new MeshHandler(new Mesh(...head));
