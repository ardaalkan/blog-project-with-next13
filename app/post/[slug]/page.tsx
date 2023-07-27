import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CtaCart from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
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
      <div className="space-y-10">
        <PostHero post={post} />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative">
            <div className="sticky flex items-center gap-5 top-20">
              <div className="font-medium md:hidden">Share this content.</div>
              <SocialLink
                isSharedURL
                platform="facebook"
                link={`https://www.facebook.com/sharer.php?u=${
                  `${process.env.NEXT_PUBLİC_SITE_URL}` + `/post/${post.slug}`
                }`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        <CtaCart />
      </div>
    </PaddingContainer>
  );
};

export default Page;
