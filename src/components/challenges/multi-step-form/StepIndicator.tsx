import { useStore } from "@nanostores/react";
import { currentStep } from "./StepProvider";

function StepIndicator() {
  const $currentStep = useStore(currentStep);

  return (
    <ul>
      <li className={`step-indicator${$currentStep === 1 ? " active" : ""}`}>
        <p>Step 1</p>
        <>
          <div>1</div>
          <h2>Your info</h2>
        </>
      </li>
      <li className={`step-indicator${$currentStep === 2 ? " active" : ""}`}>
        <p>Step 2</p>
        <>
          <div>2</div>
          <h2>Select plan</h2>
        </>
      </li>
      <li className={`step-indicator${$currentStep === 3 ? " active" : ""}`}>
        <p>Step 3</p>
        <>
          <div>3</div>
          <h2>Add-ons</h2>
        </>
      </li>
      <li className={`step-indicator${$currentStep >= 4 ? " active" : ""}`}>
        <p>Step 4</p>
        <>
          <div>4</div>
          <h2>Summary</h2>
        </>
      </li>
    </ul>
  );
}

export default StepIndicator;
