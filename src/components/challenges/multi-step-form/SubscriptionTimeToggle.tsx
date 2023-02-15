import { useStore } from "@nanostores/react";
import { isSubscriptionTimeMonthly } from "./StepProvider";

function SubscriptionTimeToggle() {
  const $isSubscriptionTimeMonthly = useStore(isSubscriptionTimeMonthly);

  function toggleSubscriptionTime() {
    isSubscriptionTimeMonthly.set(!$isSubscriptionTimeMonthly);
  }

  return (
    <div className="button-month-year">
      <strong className={$isSubscriptionTimeMonthly ? "active" : ""}>
        Monthly
      </strong>
      <input
        id="month-year"
        type="checkbox"
        name="subscription"
        checked={!$isSubscriptionTimeMonthly}
        onChange={toggleSubscriptionTime}
      />
      <label htmlFor="month-year">
        <span className="dot"></span>
      </label>
      <strong className={!$isSubscriptionTimeMonthly ? "active" : ""}>
        Yearly
      </strong>
    </div>
  );
}

export default SubscriptionTimeToggle;
