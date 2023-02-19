import { useStore } from "@nanostores/react";
import {
  deleteModalCallback,
  isDeleteModalVisible,
} from "../../../components/challenges/interactive-comments-section/Store";

export function useModal(onDelete: () => void) {
  const $isDeleteModalVisible = useStore(isDeleteModalVisible);

  function open() {
    isDeleteModalVisible.set(true);
    deleteModalCallback.set(onDelete);
  }

  function close() {
    isDeleteModalVisible.set(false);
  }

  return {
    open,
    close,
  };
}
