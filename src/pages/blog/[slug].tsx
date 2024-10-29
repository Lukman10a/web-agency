import React from "react";
import { useRouter } from "next/router";

const PostDetails = () => {
  const { query } = useRouter();

  return <div>page {query.id}</div>;
};

export default PostDetails;
