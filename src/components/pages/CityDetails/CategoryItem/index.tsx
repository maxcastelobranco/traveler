import React from "react";
import { Category } from "../../../../hooks/types";
import Camera from "../../../svgs/locationCategories/Camera";
import CoffeeMug from "../../../svgs/locationCategories/CoffeeMug";
import Calendar from "../../../svgs/locationCategories/Calendar";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { motion, Transition, Variants } from "framer-motion";
import { CATEGORY_ANIMATION_DURATION } from "../../../svgs/locationCategories/constants";

interface CategoryItemProps {
  category: Category;
  categoryCount: number;
  index: number;
}

const variants: Variants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const CategoryItem: React.FC<CategoryItemProps> = ({ category, categoryCount, index }) => {
  const { container, iconContainer } = useStyles();
  const delay = index * CATEGORY_ANIMATION_DURATION;

  const transition: Transition = {
    duration: CATEGORY_ANIMATION_DURATION,
    delay,
    type: "spring",
    bounce: 0.6,
  };

  const icon =
    category === "Tourist Spots" ? (
      <Camera {...{ delay }} />
    ) : category === "Food and Drinks" ? (
      <CoffeeMug {...{ delay }} />
    ) : (
      <Calendar {...{ delay }} />
    );

  return (
    <motion.div
      {...{ variants, transition }}
      initial="initial"
      animate="animate"
      className={container}
    >
      <div className={iconContainer}>{icon}</div>
      <div>
        <Typography variant="h3">{categoryCount}</Typography>
        <Typography variant="subtitle1">{category}</Typography>
      </div>
    </motion.div>
  );
};

export default CategoryItem;
