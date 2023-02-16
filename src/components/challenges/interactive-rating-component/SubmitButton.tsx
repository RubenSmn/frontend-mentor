import { useStore } from "@nanostores/react";
import { isSubmitted, rating } from "./Store";

function SubmitButton() {
  const $rating = useStore(rating);

  function handleClick() {
    isSubmitted.set(true);
  }

  return (
    <button
      className="submit"
      onClick={handleClick}
      type="submit"
      disabled={$rating === null}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
