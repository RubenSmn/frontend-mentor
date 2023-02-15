import { useStore } from "@nanostores/react";
import {
  isSubscriptionTimeMonthly,
  PlanType,
  subscriptionPlan,
} from "./StepProvider";

type Props = {
  src: string;
  plan: PlanType;
};

function PlanItem({ src, plan }: Props) {
  const $isSubscriptionTimeMonthly = useStore(isSubscriptionTimeMonthly);
  const $subscriptionPlan = useStore(subscriptionPlan);

  const itemCost = $isSubscriptionTimeMonthly
    ? plan.dollarPerMonth
    : plan.dollarPerMonth * 10;

  const lowerCaseTitle = plan.title.toLowerCase();

  function handleSubscriptionChange() {
    subscriptionPlan.set(plan);
  }

  return (
    <>
      <input
        name="plan"
        type="radio"
        checked={plan.title === $subscriptionPlan.title}
        value={plan.title}
        onChange={handleSubscriptionChange}
        id={`plan-${lowerCaseTitle}`}
      />
      <label htmlFor={`plan-${lowerCaseTitle}`}>
        <img src={src} alt={plan.title} />
        <div>
          <h3>{plan.title}</h3>
          <p>${itemCost}/mo</p>
          {$isSubscriptionTimeMonthly ? null : (
            <p className="yearly-information">2 months free</p>
          )}
        </div>
      </label>
    </>
  );
}

export default PlanItem;
