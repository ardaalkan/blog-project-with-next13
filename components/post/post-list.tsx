import React from "react";
import PostCart from "./post-card";
import { Post } from "@/types/collections";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {posts.map((post) => {
        return <PostCart layout={layout} post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
