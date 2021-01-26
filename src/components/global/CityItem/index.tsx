import React from "react";
import { useStyles } from "./styles";
import { Typography, useTheme } from "@material-ui/core";
import { CITY_ITEM_WIDTH, CITY_ITEM_HEIGHT } from "../../pages/Home/constants";
import { motion, Variants } from "framer-motion";
import { Theme } from "../../../theme";
import { CityData } from "../../../hooks/swr/types";
import Link from "next/link";
import { preventImageDrag } from "../../../utils/preventImageDrag";

interface CityItemProps extends Omit<CityData, "description"> {
  activeCity: string | null;
  setActiveCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const variants: Variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

const CityItem: React.FC<CityItemProps> = ({
  id,
  image,
  name,
  numberOfLocations,
  activeCity,
  setActiveCity,
}) => {
  const { shadows } = useTheme<Theme>();
  const { wrapper, container, text } = useStyles({ id, activeCity });

  return (
    <Link href={`/city/${id}`}>
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
          {...{ variants }}
          className={container}
          initial="initial"
          animate="animate"
          whileHover={{
            boxShadow: shadows[1],
          }}
        >
          <img
            {...preventImageDrag}
            src={image}
            alt={name}
            width={CITY_ITEM_WIDTH}
            height={CITY_ITEM_HEIGHT * 0.75}
            style={{
              objectFit: "cover",
            }}
          />
          <Typography variant="h5" className={text}>
            {name}
          </Typography>
          <Typography variant="caption" className={text}>
            {numberOfLocations} locations
          </Typography>
        </motion.div>
      </div>
    </Link>
  );
};

export default CityItem;
