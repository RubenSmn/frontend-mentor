import { atom } from "nanostores";

export const rating = atom<number | null>(null);

export const isSubmitted = atom<boolean>(false);
