import React from "react";
import { Category } from "../../../../hooks/types";
import Camera from "../../../svgs/locationCategories/Camera";
import CoffeeMug from "../../../svgs/locationCategories/CoffeeMug";
import Calendar from "../../../svgs/locationCategories/Calendar";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { motion, Transition, Variants } from "framer-motion";

interface CategoryItemProps {
  category: Category;
  categoryCount: number;
  index: number;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category, categoryCount, index }) => {
  const { container, iconContainer } = useStyles();

  const variants: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const transition: Transition = {
    duration: 0.8,
    ease: "easeIn",
    delay: index * 0.8,
  };

  const icon =
    category === "Tourist Spots" ? (
      <Camera delay={index} />
    ) : category === "Food and Drinks" ? (
      <CoffeeMug delay={index} />
    ) : (
      <Calendar delay={index} />
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
