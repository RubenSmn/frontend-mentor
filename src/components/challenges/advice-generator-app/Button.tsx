import { slip } from "./Store";

type Props = {
  src: string;
};

function Button({ src }: Props) {
  async function refetch() {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "reload",
    });
    const data = await response.json();
    console.log(data);
    slip.set(data.slip);
  }

  return (
    <button
      className="bg-[var(--neon-green)] rounded-[100%] p-4 absolute mx-auto bottom-0 translate-y-[50%] hover:shadow-[0px_0px_16px_0px_var(--neon-green)] transition-shadow duration-150"
      onClick={refetch}
    >
      <img src={`${src}/icon-dice.svg`} alt="" />
    </button>
  );
}

export default Button;
