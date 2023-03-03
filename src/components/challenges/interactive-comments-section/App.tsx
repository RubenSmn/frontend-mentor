import { useStore } from "@nanostores/react";
import { humanizedTimeAgo } from "../../../helpers/time";
import CommentList from "./CommentList";
import ReplySection from "./ReplySection";
import { commentTree, currentUser, normalizedComments } from "./Store";

type Props = {
  src: string;
};

function App({ src }: Props) {
  const $commentTree = useStore(commentTree);
  const $comments = useStore(normalizedComments);

  function onReply(content: string) {
    const newComment = {
      id: Object.keys($comments).length + 1,
      user: currentUser,
      content: content,
      score: 0,
      createdAt: humanizedTimeAgo(new Date()),
      parentId: null,
    };
    normalizedComments.setKey(newComment.id, newComment);
  }

  return (
    <>
      <CommentList commentTree={$commentTree} src={src} />
      <ReplySection onReply={onReply} type="Send" src={src} />
    </>
  );
}

export default App;
