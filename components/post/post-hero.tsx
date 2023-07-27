import React from "react";
import { Post } from "@/types/collections";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
}

const PostHero = ({ post }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        src={post.image}
        alt="Post Content Image"
        width={1200}
        height={500}
      />
    </div>
  );
};

export default PostHero;
