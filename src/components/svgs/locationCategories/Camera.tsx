import React from "react";
import { motion, Transition, Variants } from "framer-motion";
import { CategoryIconProps } from "./types";

const Camera: React.FC<CategoryIconProps> = ({ delay }) => {
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
    duration: 0.8,
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
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        d="M38.333 31.667A3.333 3.333 0 0135 35H5a3.333 3.333 0 01-3.333-3.333V13.333A3.333 3.333 0 015 10h6.666L15 5h10l3.333 5H35a3.334 3.334 0 013.333 3.333v18.334z"
      />
      <motion.path
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        d="M20 28.333A6.667 6.667 0 1020 15a6.667 6.667 0 000 13.333z"
      />
    </motion.svg>
  );
};

export default Camera;
