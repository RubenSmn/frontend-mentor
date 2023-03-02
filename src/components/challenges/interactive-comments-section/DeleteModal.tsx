import { useStore } from "@nanostores/react";
import { deleteModalCallback, isDeleteModalVisible } from "./Store";

function DeleteModal() {
  const $isDeleteModalShown = useStore(isDeleteModalVisible);
  const $deleteModalCallback = useStore(deleteModalCallback);

  function handleCancel() {
    isDeleteModalVisible.set(false);
  }

  function handleDelete() {
    isDeleteModalVisible.set(false);
    $deleteModalCallback();
  }

  return $isDeleteModalShown ? (
    <div
      className="absolute top-0 left-0 h-screen w-screen bg-black/50 flex justify-center items-center z-50 overflow-hidden"
      onClick={handleCancel}
    >
      <div className="max-w-xs bg-white rounded-lg p-5">
        <h2 className="font-[500] text-xl mb-3 text-[var(--grayish-blue)]">
          Delete comment
        </h2>
        <p className="mb-4 text-[var(--grayish-blue)]">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className="flex justify-between items-center text-white font-[500]">
          <button
            className="uppercase px-5 py-3 bg-[var(--grayish-blue)] rounded-md hover:opacity-70 ease-linear duration-150"
            onClick={handleCancel}
          >
            no, cancel
          </button>
          <button
            className="uppercase px-5 py-3 bg-[var(--soft-red)] rounded-md hover:opacity-70 ease-linear duration-150"
            onClick={handleDelete}
          >
            yes, delete
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default DeleteModal;
