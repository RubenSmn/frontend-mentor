import { useStore } from "@nanostores/react";
import {
  currentStep,
  isSubscriptionTimeMonthly,
  subscriptionPlan,
  addons,
} from "./StepProvider";

function CheckoutList() {
  const $isSubscriptionTimeMonthly = useStore(isSubscriptionTimeMonthly);
  const $subscriptionPlan = useStore(subscriptionPlan);
  const $addons = useStore(addons);

  const totalCost = $addons.reduce(
    (total, addon) => total + addon.dollarPerMonth,
    $subscriptionPlan.dollarPerMonth
  );

  const totalCostText = `+$${
    $isSubscriptionTimeMonthly ? totalCost : totalCost * 10
  }/${$isSubscriptionTimeMonthly ? "mo" : "yr"}`;

  return (
    <ul className="finishing-up">
      <li>
        <div className="base-cost">
          <strong>
            Arcade ({$isSubscriptionTimeMonthly ? "Monthly" : "Yearly"})
          </strong>
          <button onClick={() => currentStep.set(2)}>Change</button>
        </div>
        <strong>
          $
          {$isSubscriptionTimeMonthly
            ? $subscriptionPlan.dollarPerMonth
            : $subscriptionPlan.dollarPerMonth * 10}
          /{$isSubscriptionTimeMonthly ? "mo" : "yr"}
        </strong>
      </li>
      <hr />
      {$addons.map((addon) => {
        const addonCost = $isSubscriptionTimeMonthly
          ? addon.dollarPerMonth
          : addon.dollarPerMonth * 10;
        return (
          <li key={addon.title}>
            <p>{addon.title}</p>
            <span>
              +${addonCost}/{$isSubscriptionTimeMonthly ? "mo" : "yr"}
            </span>
          </li>
        );
      })}
      <li className="total-cost">
        <p>Total (per {$isSubscriptionTimeMonthly ? "month" : "year"})</p>
        <strong>{totalCostText}</strong>
      </li>
    </ul>
  );
}

export default CheckoutList;
