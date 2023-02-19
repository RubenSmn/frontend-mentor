import React from "react";
import Comment from "./Comment";
import type { CommentTreeType } from "./Store";

type Props = {
  commentTree: CommentTreeType;
  src: string;
};

function CommentList({ src, commentTree }: Props) {
  return (
    <>
      {Object.keys(commentTree).map((commentId) => {
        const replies = Object.keys(commentTree[commentId]);

        return (
          <React.Fragment key={commentId}>
            <Comment id={commentId} src={src} />
            {replies.length > 0 ? (
              <div className="flex flex-col gap-4 w-full border-l-2 border-[var(--light-gray)] pl-4">
                <CommentList
                  key={`comment-list-${commentId}`}
                  commentTree={commentTree[commentId]}
                  src={src}
                />
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default CommentList;
