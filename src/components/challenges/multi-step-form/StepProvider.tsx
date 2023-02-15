import { atom } from "nanostores";

export const currentStep = atom(1);

export const isSubscriptionTimeMonthly = atom(true);

export type AddonType = {
  title: string;
  description: string;
  dollarPerMonth: number;
};

export const addonData: AddonType[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    dollarPerMonth: 1,
  },

  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    dollarPerMonth: 2,
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    dollarPerMonth: 2,
  },
];

export type PlanType = {
  title: string;
  dollarPerMonth: number;
};

export const planData: PlanType[] = [
  {
    title: "Arcade",
    dollarPerMonth: 9,
  },
  {
    title: "Advanced",
    dollarPerMonth: 12,
  },
  {
    title: "Pro",
    dollarPerMonth: 15,
  },
];

export const subscriptionPlan = atom<PlanType>(planData[0]);

export const addons = atom<AddonType[]>([]);
