import { useStore } from "@nanostores/react";
import type React from "react";
import { isSubmitted } from "./Store";

type Props = {
  showOnSubmitted: boolean;
  children: React.ReactNode;
};

function Step({ showOnSubmitted, children }: Props) {
  const $isSubmitted = useStore(isSubmitted);

  return $isSubmitted === showOnSubmitted ? children : null;
}

export default Step;
