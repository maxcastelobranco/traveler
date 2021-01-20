import React from "react";
import { motion, Transition, Variants } from "framer-motion";
import { CategoryIconProps } from "./types";
import { CATEGORY_ANIMATION_DURATION } from "./constants";

const coffeeSteamPaths = ["M9.167,3.333v5", "M15.833,3.333v5", "M22.5,3.333v5"];

const CoffeeMug: React.FC<CategoryIconProps> = ({ delay }) => {
  const variants: Variants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
    },
  };
  const transition: Transition = {
    duration: CATEGORY_ANIMATION_DURATION,
    ease: "easeIn",
    delay,
  };

  return (
    <motion.svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      stroke="#F25D27"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        d="M29.167,15h1.667 c1.768,0,3.464,0.702,4.714,1.953c1.25,1.25,1.953,2.946,1.953,4.714c0,1.768-0.702,3.464-1.953,4.714 c-1.25,1.25-2.946,1.953-4.714,1.953h-1.667"
      />
      <motion.path
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        d="M2.5,15h26.667v15 c0,1.768-0.702,3.464-1.953,4.714c-1.25,1.25-2.946,1.953-4.714,1.953H9.167c-1.768,0-3.464-0.702-4.714-1.953 C3.202,33.464,2.5,31.768,2.5,30V15z"
      />
      {coffeeSteamPaths.map((d, index) => {
        const steamTransition: Transition = {
          ...transition,
          delay: delay + index * 0.33,
        };

        return (
          <motion.path
            key={d}
            {...{ variants, d }}
            initial="initial"
            animate="animate"
            transition={steamTransition}
          />
        );
      })}
    </motion.svg>
  );
};

export default CoffeeMug;
