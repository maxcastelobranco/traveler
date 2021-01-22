import React from "react";
import Image from "next/image";
import { LocationData } from "../../../../hooks/types";
import { Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { useStyles } from "./styles";
import { motion, Transition, Variants } from "framer-motion";
import Camera from "../../../svgs/locationCategories/static/Camera";
import CoffeeMug from "../../../svgs/locationCategories/static/CoffeeMug";
import Calendar from "../../../svgs/locationCategories/static/Calendar";
import Link from "next/link";

const variants: Variants = {
  whileHover: {
    scale: 1.1,
  },
};

const transition: Transition = {
  ease: "easeInOut",
};

interface LocationItemProps extends LocationData {
  activeLocation: string | null;
  setActiveLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

const LocationItem: React.FC<LocationItemProps> = ({
  id,
  name,
  image,
  category,
  rating,
  activeLocation,
  setActiveLocation,
}) => {
  const {
    container,
    ratingContainer,
    borderRadius,
    typographyContainer,
    title,
    categoryContainer,
  } = useStyles({ id, activeLocation });

  const icon =
    category === "Tourist Spots" ? (
      <Camera />
    ) : category === "Food and Drinks" ? (
      <CoffeeMug />
    ) : (
      <Calendar />
    );

  return (
    <Link href={`/location/${id}`}>
      <motion.div
        onMouseEnter={() => {
          setActiveLocation(id);
        }}
        onMouseLeave={() => {
          setActiveLocation(null);
        }}
        className={container}
        {...{ variants, transition }}
        whileHover="whileHover"
      >
        <div className={ratingContainer}>
          <Star />
          <Typography variant="h5">{rating}</Typography>
        </div>
        <Image src={image} width={200} height={120} objectFit="cover" className={borderRadius} />
        <div className={typographyContainer}>
          <Typography variant="h5" className={title}>
            {name}
          </Typography>
          <div className={categoryContainer}>
            <Typography variant="subtitle2" color="textSecondary">
              {category}
            </Typography>
            {icon}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default LocationItem;
