import React from "react";
import { useStyles } from "./styles";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import { CITY_ITEM_WIDTH, CITY_ITEM_HEIGHT } from "../constants";
import { motion, Variants } from "framer-motion";

interface CityProps {
  image: string;
  name: string;
  numberOfLocations: number;
}

const City: React.FC<CityProps> = ({ image, name, numberOfLocations }) => {
  const { container, text } = useStyles();

  const containerVariants: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  return (
    <motion.div
      className={container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover={{
        opacity: 1,
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
  );
};

export default City;
