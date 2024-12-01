import { NextApiRequest, NextApiResponse } from "next";

import { createReader } from "@keystatic/core/reader";

import keystaticConfig from "../../../keystatic.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const reader = createReader(process.cwd(), keystaticConfig);
    const postsData = await reader.collections.posts.all();

    res.status(200).json(postsData);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
}
