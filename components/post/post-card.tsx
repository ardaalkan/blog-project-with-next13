import { Post } from "@/types/collections";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCart = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <Link
      className={`@container ${
        layout === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          : "space-y-10 "
      }`}
      href={`/post/${post.slug}`}
    >
      <Image
        className={`rounded-md w-full object-cover object-center max-h-[300px] ${
          reverse ? "md:order-last " : ""
        }`}
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
      />
      <PostContent post={post} />
    </Link>
  );
};

export default PostCart;
