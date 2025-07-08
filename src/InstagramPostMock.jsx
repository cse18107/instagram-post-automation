
import React from "react";
import {useSearchParams} from "react-router-dom";
import usePostStore from "./store/postStore";
import CommentDrawer from "./components/CommentDrawer";
import PostSection from "./components/PostSection";
import ChatMockup from "./components/DmSection";

const InstagramPostMock = ({tab, setTab}) => {
  const [liked, setLiked] = React.useState(false);
  const [bookmarked, setBookmarked] = React.useState(false);
  const [searchParams] = useSearchParams();

  const id = Number(searchParams.get("id")) || 1;

  const post = usePostStore((state) => state.posts.find((p) => p.id === id));

  React.useEffect(() => {
    if (post.commentMessage.length > 0 && post.dm.length === 0) setTab(2);
    if (post.commentMessage.length > 0 && post.dm.length > 0) setTab(3);
  }, [id, post]);

  if (!post) return null;

  if (tab === 1)
    return (
      <PostSection
        post={post}
        setLiked={setLiked}
        liked={liked}
        setBookmarked={setBookmarked}
        bookmarked={bookmarked}
      />
    );

  if (tab === 2) return <CommentDrawer post={post} />;
  if (tab === 3) return <ChatMockup post={post} />;
};

export default InstagramPostMock;

