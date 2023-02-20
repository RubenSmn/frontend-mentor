import { atom } from "nanostores";

export type SlipType = {
  id: number;
  advice: string;
};

export const slip = atom<SlipType | null>(null);
