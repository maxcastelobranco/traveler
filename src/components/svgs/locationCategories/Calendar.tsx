import { motion, Transition, Variants } from "framer-motion";
import React from "react";
import { CategoryIconProps } from "./types";

const Calendar: React.FC<CategoryIconProps> = ({ delay }) => {
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
    <motion.svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <motion.path
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
        d="M31.175 7.107H7.842a3.333 3.333 0 00-3.334 3.333v23.334a3.333 3.333 0 003.334 3.333h23.333a3.333 3.333 0 003.333-3.333V10.44a3.333 3.333 0 00-3.333-3.333zM26.175 3.774v6.667M12.842 3.774v6.667M4.508 17.107h30"
        stroke="#F25D27"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default Calendar;