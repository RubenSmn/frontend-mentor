import { atom, computed, map } from "nanostores";
import data from "../../../data/interactive-comments-section.json";

export type UserType = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export const currentUser = { ...data.currentUser };

export type CommentType = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: UserType;
  parentId: number | null;
};

export type CommentTreeType = {
  [commentId: string]: CommentTreeType;
};

export type NormalizedCommentType = {
  [commentId: string]: CommentType;
};

function normalize(comments: CommentType[]) {
  return comments.reduce((norm, curr) => {
    norm[curr.id] = curr;
    return norm;
  }, {} as NormalizedCommentType);
}

function buildTreeFromNormalization(comments: NormalizedCommentType) {
  const hashTable: CommentTreeType = {};
  Object.values(comments).forEach((comment) => (hashTable[comment.id] = {}));

  const dataTree: CommentTreeType = {};
  Object.values(comments).forEach((book) => {
    if (book.parentId) {
      hashTable[book.parentId][book.id] = hashTable[book.id];
    } else {
      dataTree[book.id] = hashTable[book.id];
    }
  });

  return dataTree;
}

export const normalizedComments = map<NormalizedCommentType>(
  normalize(data.comments)
);

export const commentTree = computed(normalizedComments, (commentsValue) => {
  return buildTreeFromNormalization(commentsValue);
});

export const isDeleteModalVisible = atom(false);

export const deleteModalCallback = atom<() => void>(() =>
  console.log("default callback")
);
