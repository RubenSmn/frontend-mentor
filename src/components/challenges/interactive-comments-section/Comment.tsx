import { useStore } from "@nanostores/react";
import { useState } from "react";
import { humaninzedTimeAgo } from "../../../helpers/time";
import { useModal } from "../../../hooks/challenges/interactive-comments-section/useModal";
import EditArea from "./EditArea";
import ReplySection from "./ReplySection";
import { CommentType, currentUser, normalizedComments } from "./Store";

type Props = {
  id: string;
  src: string;
};

function createComment(
  id: number,
  comment: string,
  parentId: number
): CommentType {
  return {
    id: id,
    user: currentUser,
    content: comment,
    score: 0,
    createdAt: humaninzedTimeAgo(new Date()),
    parentId: parentId,
  };
}

function Comment({ id, src }: Props) {
  const [showReply, setShowReply] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [voteStatus, setVoteStatus] = useState(0);
  const { open } = useModal(onDelete);
  const $comments = useStore(normalizedComments);
  const comment = $comments[id];
  const isCurrentUser = comment.user.username === currentUser.username;

  function onReply(content: string) {
    const newComment = createComment(
      Object.keys($comments).length + 1,
      content,
      comment.id
    );
    setShowReply(false);
    normalizedComments.setKey(newComment.id, newComment);
  }

  function onDelete() {
    const updatedComments = { ...$comments };
    delete updatedComments[id];
    normalizedComments.set(updatedComments);
  }

  function handleEdit(newContent: string) {
    const updatedComment = { ...comment, content: newContent };
    normalizedComments.setKey(id, updatedComment);
    setShowEdit(false);
  }

  function handleUpVote() {
    setVoteStatus((prevVoteStatus) => {
      if (prevVoteStatus === 1) return 0;
      return 1;
    });
  }

  function handleDownVote() {
    setVoteStatus((prevVoteStatus) => {
      if (prevVoteStatus === -1) return 0;
      return -1;
    });
  }

  return (
    <>
      <section className="grid grid-cols-2 p-4 bg-white rounded-md shadow-sm">
        <header className="flex items-center gap-3 mb-3 col-span-2">
          <img
            src={src + comment.user.image.png}
            alt={comment.user.username}
            className="h-8"
          />
          <strong className="text-[var(--dark-blue)]">
            {comment.user.username}
          </strong>
          {isCurrentUser ? (
            <div className="px-1.5 mr-1 font-[500] text-sm rounded-sm bg-[var(--moderate-blue)] text-white">
              you
            </div>
          ) : null}
          <span className="text-[var(--grayish-blue)]">
            {comment.createdAt}
          </span>
        </header>
        {showEdit ? (
          <EditArea
            comment={comment.content}
            onSubmit={handleEdit}
            src={src}
            onCancel={() => setShowEdit(false)}
          />
        ) : (
          <>
            <p className="text-[var(--grayish-blue)] mb-4 col-span-2">
              {comment.replyingTo ? (
                <span className="text-[var(--moderate-blue)] font-[500]">
                  @{comment.replyingTo}{" "}
                </span>
              ) : null}
              {comment.content}
            </p>
            <div className="flex justify-evenly items-center bg-[var(--very-light-gray)] rounded-lg self-center justify-self-start">
              <button
                className={`px-4 py-3 fill-[#C5C6EF] hover:fill-[var(--moderate-blue)] ease-linear duration-150${
                  voteStatus === 1 ? " fill-[var(--moderate-blue)]" : ""
                }`}
                onClick={handleUpVote}
              >
                <svg viewBox="0 0 11 11" height="11" width="11">
                  <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"></path>
                </svg>
              </button>
              <span className="text-[var(--moderate-blue)] font-bold">
                {comment.score + voteStatus}
              </span>
              <button
                className={`px-4 py-3 fill-[#C5C6EF] hover:fill-[var(--moderate-blue)] ease-linear duration-150${
                  voteStatus === -1 ? " fill-[var(--moderate-blue)]" : ""
                }`}
                onClick={handleDownVote}
              >
                <svg viewBox="0 0 11 3" height="3" width="11">
                  <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"></path>
                </svg>
              </button>
            </div>
            <div className="self-center justify-self-end">
              {isCurrentUser ? (
                <div className="flex gap-4">
                  <button
                    className="flex justify-between items-center gap-2 text-[var(--soft-red)] font-bold hover:opacity-70 ease-in duration-150"
                    onClick={open}
                  >
                    <img src={`${src}/icon-delete.svg`} alt="Reply icon" />
                    Delete
                  </button>
                  <button
                    className="flex justify-between items-center gap-2 text-[var(--moderate-blue)] font-bold hover:opacity-70 ease-in duration-150"
                    onClick={() => setShowEdit(true)}
                  >
                    <img src={`${src}/icon-edit.svg`} alt="Reply icon" />
                    Edit
                  </button>
                </div>
              ) : (
                <button
                  className="flex justify-between items-center gap-2 text-[var(--moderate-blue)] font-bold hover:opacity-70 ease-in duration-150"
                  onClick={() => setShowReply((prev) => !prev)}
                >
                  {!showReply ? (
                    <>
                      <img src={`${src}/icon-reply.svg`} alt="Reply icon" />
                      Reply
                    </>
                  ) : (
                    "Cancel"
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </section>
      {showReply ? (
        <ReplySection src={src} type={"Reply"} onReply={onReply} />
      ) : null}
    </>
  );
}

export default Comment;
