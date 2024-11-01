import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Sora, Noto_Sans, Noto_Sans_Mono } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-mono",
});

// Source example
export type Heading = {
  title: string;
  id?: string;
  level?: number;
};

export type Node = {
  name: string;
  attributes?: { [key: string]: never };
  children?: Array<Node | string>;
};

export function collectHeadings(
  node: Node,
  sections: Heading[] = [],
): Heading[] {
  if (!node) return sections;

  // Check if the node represents a heading element (e.g., h1, h2, h3...)
  if (typeof node.name === "string" && node.name.match(/^h[1-6]$/)) {
    const titleNode = node.children?.[0];
    const title = typeof titleNode === "string" ? titleNode : "";

    if (title) {
      sections.push({
        title,
        id: node.attributes?.id || title.toLowerCase().replace(/ /g, "-"),
        level: parseInt(node.name[1]), // Extract the heading level from the tag name
      });
    }
  }

  // Recursively traverse child nodes
  if (node.children) {
    for (const child of node.children) {
      if (typeof child !== "string") {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}
// const content = Markdoc.transform(ast);
// const headings = collectHeadings(content);
