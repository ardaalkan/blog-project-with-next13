import PaddingContainer from "@/components/layout/padding-container";
import PostCart from "@/components/post/post-card";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home() {
  return (
    <PaddingContainer>
      <main className="h-auto space-y-10">
        <PostCart post={DUMMY_POSTS[0]} />
      </main>
    </PaddingContainer>
  );
}
