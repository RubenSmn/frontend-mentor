import { useStore } from "@nanostores/react";
import { currentStep } from "./StepProvider";

function StepIndicator() {
  const $currentStep = useStore(currentStep);

  return (
    <ul>
      <li className={`step-indicator${$currentStep === 1 ? " active" : ""}`}>
        <span>1</span>
        <div>
          <p>Step 1</p>
          <h2>Your info</h2>
        </div>
      </li>
      <li className={`step-indicator${$currentStep === 2 ? " active" : ""}`}>
        <span>2</span>
        <div>
          <p>Step 2</p>
          <h2>Select plan</h2>
        </div>
      </li>
      <li className={`step-indicator${$currentStep === 3 ? " active" : ""}`}>
        <span>3</span>
        <div>
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </div>
      </li>
      <li className={`step-indicator${$currentStep >= 4 ? " active" : ""}`}>
        <span>4</span>
        <div>
          <p>Step 4</p>
          <h2>Summary</h2>
        </div>
      </li>
    </ul>
  );
}

export default StepIndicator;
