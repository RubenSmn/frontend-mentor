import { currentUser } from "./Store";

type Props = {
  src: string;
  type: string;
  onReply: (comment: string) => void;
};

function ReplySection({ src, type, onReply }: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    onReply(formData.get("comment") as string);
  }

  return (
    <section className="w-full p-4 bg-white rounded-md shadow-sm">
      <form className="grid grid-cols-2 gap-4 md:flex" onSubmit={handleSubmit}>
        <fieldset className="col-span-2 md:col-span-full md:order-1 md:flex-1">
          <textarea
            name="comment"
            rows={3}
            placeholder="Add a comment..."
            className="border-2 border-[var(--light-gray)] text-[var(--grayish-blue)] rounded-lg py-2 px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--moderate-blue)] placeholder:font-[500] w-full"
          ></textarea>
        </fieldset>
        <img
          src={src + currentUser.image.png}
          alt={currentUser.username}
          className="h-8 self-center justify-self-start md:self-start"
        />
        <button className="px-4 py-2 rounded-md uppercase font-[500] text-white bg-[var(--moderate-blue)] self-center justify-self-end focus:opacity-70 hover:opacity-70 ease-in duration-150 md:order-2 md:self-start">
          {type}
        </button>
      </form>
    </section>
  );
}

export default ReplySection;
