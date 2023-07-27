import CtaCart from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCart from "@/components/post/post-card";
import PostList from "@/components/post/post-list";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCart post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
          layout={"vertical"}
        />
        <CtaCart />
        <PostCart reverse post={DUMMY_POSTS[3]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
          layout={"vertical"}
        />
      </main>
    </PaddingContainer>
  );
}
