import { currentUser, UserType } from "./Store";

type Props = {
  src: string;
  type: string;
};

function ReplySection({ src, type }: Props) {
  return (
    <section className="w-full p-4 bg-white rounded-md shadow-sm">
      <form className="grid grid-cols-2 gap-4">
        <fieldset className="col-span-2">
          <textarea
            name=""
            rows={3}
            placeholder="Add a comment..."
            className="border-2 border-[var(--light-gray)] text-[var(--grayish-blue)] rounded-lg py-2 px-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--moderate-blue)] placeholder:font-[500] w-full"
          ></textarea>
        </fieldset>
        <img
          src={src + currentUser.image.png}
          alt={currentUser.username}
          className="h-8 self-center justify-self-start"
        />
        <button className="px-6 py-3 rounded-md uppercase font-[500] text-white bg-[var(--moderate-blue)] self-center justify-self-end focus:opacity-70 hover:opacity-70 ease-in duration-150">
          {type}
        </button>
      </form>
    </section>
  );
}

export default ReplySection;
