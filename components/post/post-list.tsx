import React from "react";
import PostCart from "./post-card";
import { Post } from "@/types/collections";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid sm:grid-col-1 md:grid-cols-2 gap-10 lg:grid-flow-col lg:auto-cols-fr">
      {posts.map((post) => {
        return <PostCart layout={layout} post={post} key={post.id} />;
      })}
    </div>
  );
};

export default PostList;
