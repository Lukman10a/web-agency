import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCardProps {
  imageUrl: string;
  category: string;
  date: string;
  title: string;
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  category,
  date,
  title,
  id,
}) => {
  return (
    <div className="mb-2 max-w-[400px] mx-auto p-2">
      <div className="">
        <Image
          src={imageUrl}
          alt="Post image"
          className="mb-3 w-full rounded-xl sm:rounded-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[90%]">
        <p className="mb-2">
          <span className="font-semibold font-inter">{category}</span> - {date}
        </p>
        <h1 className="font-bold font-sans">
          <Link href={`/blog/${id}`} className="hover:underline">
            {title}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PostCard;
