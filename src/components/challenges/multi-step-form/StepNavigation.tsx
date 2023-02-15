import type { CSSProperties } from "react";
import { useStore } from "@nanostores/react";
import { currentStep, user } from "./StepProvider";

const maxSteps = 5;

function StepNavigation() {
  const $currentStep = useStore(currentStep);
  const $user = useStore(user);

  function handleBack() {
    if ($currentStep > 1) currentStep.set(currentStep.get() - 1);
  }

  function handleNext() {
    if ($currentStep <= maxSteps) currentStep.set(currentStep.get() + 1);
  }

  const isNextButtonDisabled = Object.values($user).some(
    (x) => x === "" || x === null
  );

  const backStyle: CSSProperties =
    $currentStep === 1 || $currentStep === maxSteps
      ? { visibility: "hidden" }
      : {};
  const nextStyle: CSSProperties =
    $currentStep === maxSteps ? { visibility: "hidden" } : {};

  return (
    <div className="navigation-buttons">
      <button className="back" style={backStyle} onClick={handleBack}>
        Go Back
      </button>
      <button
        className={`next${$currentStep === maxSteps - 1 ? " final" : ""}`}
        style={nextStyle}
        onClick={handleNext}
        disabled={isNextButtonDisabled}
      >
        {$currentStep === maxSteps - 1 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default StepNavigation;
