import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { rating } from "./Store";

const variants = {
  active: {
    backgroundColor: "var(--orange)",
    color: "var(--white)",
  },
  inactive: {
    backgroundColor: "var(--medium-blue)",
    color: "var(--light-grey)",
  },
  hover: {
    backgroundColor: "var(--medium-grey)",
    color: "var(--white)",
  },
};

const totalRating = 5;

function Rating() {
  const $rating = useStore(rating);

  function changeRating(newRating: number) {
    rating.set(newRating);
  }

  return (
    <div className="rating-container">
      {Array.from({ length: totalRating }).map((_, i) => (
        <motion.button
          key={i}
          className="rate"
          onClick={() => changeRating(i + 1)}
          variants={variants}
          initial="inactive"
          animate={$rating === i + 1 ? "active" : "inactive"}
          transition={{
            duration: 0.2,
          }}
          whileHover={$rating === i + 1 ? "active" : "hover"}
        >
          {i + 1}
        </motion.button>
      ))}
    </div>
  );
}

export default Rating;
