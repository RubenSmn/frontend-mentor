import type React from "react";

type Props = {
  comment: string;
  onSubmit: (updatedComment: string) => void;
  onCancel: () => void;
  src: string;
};

function EditArea({ comment, onSubmit, onCancel }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData.get("comment") as string);
  }

  return (
    <form className="grid grid-cols-2 gap-4 col-span-2" onSubmit={handleSubmit}>
      <fieldset className="col-span-2">
        <textarea
          name="comment"
          rows={3}
          placeholder="Add a comment..."
          defaultValue={comment}
          className="border-2 border-[var(--light-gray)] text-[var(--grayish-blue)] rounded-lg py-2 px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--moderate-blue)] placeholder:font-[500] w-full"
        ></textarea>
      </fieldset>
      <button className="px-3 py-2 rounded-md uppercase font-[500] text-white bg-[var(--moderate-blue)] self-center justify-self-end col-start-2 hover:opacity-70 ease-in duration-150">
        Update
      </button>
    </form>
  );
}

export default EditArea;
