import { useStore } from "@nanostores/react";
import { slip, SlipType } from "./Store";

type Props = {
  initialSlip: SlipType;
};

function Advice({ initialSlip }: Props) {
  const $slip = useStore(slip) ?? initialSlip;

  return (
    <>
      <h2 className="text-xs tracking-widest text-[var(--neon-green)] uppercase">
        Advice # {$slip.id}
      </h2>
      <h1 className="text-3xl font-[800] text-[var(--light-cyan)] text-center">
        "{$slip.advice}"
      </h1>
    </>
  );
}

export default Advice;
