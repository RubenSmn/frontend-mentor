import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  src: string;
};

function Main({ src }: Props): JSX.Element {
  const [reLaunch, setReLaunch] = useState(false);

  function getStarted() {
    setReLaunch((prev) => !prev);
  }

  return (
    <React.Fragment key={reLaunch}>
      <motion.div
        className="flex-1 flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
          y: "30%",
        }}
        animate={{
          opacity: 1,
          y: "10%",
        }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          y: {
            type: "spring",
            stiffness: 200,
            duration: 0.4,
            delay: 1.4,
          },
        }}
      >
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p>Are you ready to take off?</p>
      </motion.div>
      <motion.button
        className="w-[70%] bg-[var(--cream-dark)] p-4 rounded-xl font-bold text-xl mb-20 z-10"
        onClick={getStarted}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          delay: 3,
        }}
      >
        Get Started
      </motion.button>
      <motion.img
        src={src}
        alt=""
        className="absolute bottom-[-2.1rem]"
        initial={{
          y: 0,
        }}
        animate={{
          y: "-100vh",
        }}
        transition={{
          delay: 0.4,
          duration: 1,
        }}
      />
      <motion.div
        className="h-[100vh] aspect-square rounded-[100%] bg-[var(--cream-dark)] absolute z-[-1]"
        initial={{
          y: 0,
          x: 0,
          opacity: 0,
          scale: 2,
        }}
        animate={{
          y: "-30%",
          x: "50%",
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.8,
          scale: {
            duration: 0.8,
            delay: 2.8,
          },
          x: {
            delay: 2.8,
            duration: 0.8,
          },
          y: {
            duration: 0.8,
            delay: 2.8,
          },
        }}
      />
    </React.Fragment>
  );
}

export default Main;
