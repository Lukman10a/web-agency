// // markdoc.config.ts
// /** @type {import('@markdoc/markdoc').Config} */

// import { Node } from "@markdoc/markdoc";

// const generateId = (content: string): string => {
//   return content
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^a-z0-9-]/g, "");
// };

// export const config = {
//   nodes: {
//     heading: {
//       render: "Heading",
//       attributes: {
//         title: { type: String },
//         id: { type: String },
//         level: { type: Number, required: true },
//       },
//       transform(node: Node, config) {
//         const id = node.attributes.id;

//         return {
//           ...node,
//           attributes: {
//             ...node.attributes,
//             id,
//           },
//         };
//       },
//     },
//   },
// };

// // export default {
// //     nodes: {
// //         heading: {
// //           render: "Heading",
// //           attributes: {
// //             level: { type: Number, required: true },
// //             id: { type: String },
// //           },
// //           transform(node: Node, config) {
// //             const id = generateId(node.children[0]?.content || "");
// //             node.attributes.id = id; // Attach the generated ID to each heading node
// //             return node;
// //           },
// //         },
// //       },
// //   };
