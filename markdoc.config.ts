// markdoc.config.ts
/** @type {import('@markdoc/markdoc').Config} */

import { Config, Node, nodes, RenderableTreeNode } from "@markdoc/markdoc";

function generateID(
  children: Node["children"],
  attributes: { id?: string },
): string {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === "string")
    .join(" ")
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

export const config: Config = {
  nodes: {
    heading: {
      ...nodes.heading,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transform(node: Node, config: Config): any {
        // Check if transform exists on the heading node
        const baseTransform = nodes.heading.transform;

        if (typeof baseTransform !== "function") {
          throw new Error(
            "Transform function is not defined on the heading node.",
          );
        }

        // Call the base transform and assert the return type
        const base = baseTransform(node, config) as
          | Node
          | Promise<RenderableTreeNode>
          | undefined;

        // Handle the possible promise or undefined return type
        if (base instanceof Promise) {
          throw new Error(
            "Async transformation is not supported for heading nodes.",
          );
        }

        // If the base is undefined or not of type Node, handle it
        if (!base || typeof base !== "object" || !("children" in base)) {
          throw new Error("Failed to transform heading node: Invalid result.");
        }

        // Generate and assign ID
        base.attributes = base.attributes || {}; // Ensure attributes exist
        base.attributes.id = generateID(base.children ?? [], base.attributes);

        return base;
      },
    },
  },
};

// export default {
//     nodes: {
//         heading: {
//           render: "Heading",
//           attributes: {
//             level: { type: Number, required: true },
//             id: { type: String },
//           },
//           transform(node: Node, config) {
//             const id = generateId(node.children[0]?.content || "");
//             node.attributes.id = id; // Attach the generated ID to each heading node
//             return node;
//           },
//         },
//       },
//   };
