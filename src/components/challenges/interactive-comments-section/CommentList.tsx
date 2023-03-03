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
              <div className="flex gap-4 w-full md:gap-8">
                <div className="border-l-2 border-[var(--light-gray)] ml-4 md:ml-8"></div>
                <div className="flex flex-col w-full gap-4">
                  <CommentList
                    key={`comment-list-${commentId}`}
                    commentTree={commentTree[commentId]}
                    src={src}
                  />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default CommentList;
