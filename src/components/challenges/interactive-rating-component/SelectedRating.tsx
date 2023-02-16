import { useStore } from "@nanostores/react";
import { rating } from "./Store";

function SelectedRating() {
  const $rating = useStore(rating);

  return <div>You selected {$rating} out of 5</div>;
}

export default SelectedRating;
