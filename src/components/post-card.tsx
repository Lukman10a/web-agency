import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PostCardProps {
  imageUrl: string | StaticImageData;
  category: string;
  date: string;
  title: string;
  id: number | string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  category,
  date,
  title,
  id,
}) => {
  return (
    <div className="mx-auto mb-2 max-w-[400px] p-2">
      <Link href={`/posts/${id}`} className="">
        <div>
          <Image
            src={imageUrl}
            alt="Post image"
            className="mb-3 aspect-video w-full rounded-xl object-cover sm:rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div className="w-[90%]">
        <p className="font-inter mb-2">
          <span className="uppercase">{category}</span> -{" "}
          <span className="text-[#636363]">{date}</span>
        </p>
        <h1 className="font-sans font-bold">
          <Link href={`/posts/${id}`} className="hover:underline">
            {title}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PostCard;
