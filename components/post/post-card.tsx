import { Post } from "@/types/collections";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
}

const PostCart = ({ post }: PostProps) => {
  return (
    <Link className="grid grid-cols-2 gap-10 items-center" href={`/post/${post.slug}`}>
      <Image className="rounded-md w-full object-cover object-center max-h-[300px]" alt={post.title} src={post.image} width={600} height={300} />
      <PostContent post={post} />
    </Link>
  );
};

export default PostCart;
