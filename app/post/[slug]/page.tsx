import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLink from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
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

  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="mt-10 flex gap-10">
        <div className="relative">
          <div className="sticky top-20">
            <SocialLink
              isSharedURL
              platform="facebook"
              link={`https://www.facebook.com/sharer.php?u=${
                `${process.env.NEXT_PUBLİC_SITE_URL}` + `/post/${post.slug}`
              }`}
            />
          </div>
        </div>
        <div className="h-[1000px] bg-slate-200 w-full">Post Body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
