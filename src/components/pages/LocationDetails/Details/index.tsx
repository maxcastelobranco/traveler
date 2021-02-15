import React from "react";
import Header from "../../../global/Header";
import { Typography } from "@material-ui/core";
import { LocationData } from "../../../../hooks/swr/types";
import { useStyles } from "./styles";
import Camera from "../../../svgs/locationCategories/static/Camera";
import CoffeeMug from "../../../svgs/locationCategories/static/CoffeeMug";
import Calendar from "../../../svgs/locationCategories/static/Calendar";
import { motion, Transition, Variants } from "framer-motion";

const ICON_SIZE = 32;
const iconProps: React.SVGProps<SVGSVGElement> = {
  width: ICON_SIZE,
  height: ICON_SIZE,
};

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const transition: Transition = {
  delay: 1,
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

const Details: React.FC<LocationData> = ({ name, description, category }) => {
  const { contentContainer, title, iconContainer } = useStyles();

  const icon =
    category === "Tourist Spots" ? (
      <Camera {...iconProps} />
    ) : category === "Food and Drinks" ? (
      <CoffeeMug {...iconProps} />
    ) : (
      <Calendar {...iconProps} />
    );

  return (
    <>
      <motion.div
        className={iconContainer}
        {...{ variants, transition }}
        initial="initial"
        animate="animate"
      >
        {icon}
      </motion.div>
      <Header boxShadow showGoBackButton />
      <div className={contentContainer}>
        <Typography variant="h4" className={title}>
          {name}
        </Typography>
        <Typography variant="subtitle1" align="justify">
          {description}
        </Typography>
      </div>
    </>
  );
};

export default Details;
