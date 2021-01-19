import React from "react";
import { useStyles } from "./styles";
import Image from "next/image";
import { Typography, useTheme } from "@material-ui/core";
import { CITY_ITEM_WIDTH, CITY_ITEM_HEIGHT } from "../pages/HomePage/constants";
import { motion, Variants } from "framer-motion";
import { Theme } from "../../theme";

interface CityProps {
  id: string;
  image: string;
  name: string;
  numberOfLocations: number;
  activeCity: string | null;
  setActiveCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const City: React.FC<CityProps> = ({
  id,
  image,
  name,
  numberOfLocations,
  activeCity,
  setActiveCity,
}) => {
  const { shadows } = useTheme<Theme>();
  const { wrapper, container, text } = useStyles({ id, activeCity });

  const containerVariants: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <div
      onMouseEnter={() => {
        setActiveCity(id);
      }}
      onMouseLeave={() => {
        setActiveCity(null);
      }}
      className={wrapper}
    >
      <motion.div
        className={container}
        variants={containerVariants}
        initial="initial"
        animate="animate"
        whileHover={{
          boxShadow: shadows[1],
        }}
      >
        <Image src={image} alt={name} width={CITY_ITEM_WIDTH} height={CITY_ITEM_HEIGHT * 0.75} />
        <Typography variant="h5" className={text}>
          {name}
        </Typography>
        <Typography variant="caption" className={text}>
          {numberOfLocations} locations
        </Typography>
      </motion.div>
    </div>
  );
};

export default City;
