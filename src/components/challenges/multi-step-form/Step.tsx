import { useStore } from "@nanostores/react";
import { currentStep } from "./StepProvider";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Props = {
  step: number;
  children: React.ReactNode;
};

function Step({ step, children }: Props) {
  const $currentStep = useStore(currentStep);
  const [prevStep, setPrevStep] = useState($currentStep);

  useEffect(() => {
    setPrevStep($currentStep);
  }, [$currentStep]);

  return step === $currentStep ? (
    <motion.article
      initial={{
        x: `${$currentStep < prevStep ? "-" : ""}50%`,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.article>
  ) : null;
}

export default Step;
