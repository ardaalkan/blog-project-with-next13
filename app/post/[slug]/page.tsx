import { DUMMY_POSTS } from "@/DUMMY_DATA";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <div>{post?.title}</div>;
};

export default Page;
