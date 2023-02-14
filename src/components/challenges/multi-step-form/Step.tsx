import type React from "react";
import { useStore } from "@nanostores/react";
import { currentStep } from "./StepProvider";

type Props = {
  step: number;
  children: React.ReactNode;
};

function Step({ step, children }: Props) {
  const $currentStep = useStore(currentStep);

  return step === $currentStep ? children : null;
}

export default Step;
