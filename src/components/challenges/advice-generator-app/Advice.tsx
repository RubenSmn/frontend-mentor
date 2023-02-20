import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
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
      <motion.h1
        className="text-3xl font-[800] text-[var(--light-cyan)] text-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        key={$slip.advice}
      >
        "{$slip.advice}"
      </motion.h1>
    </>
  );
}

export default Advice;
