import React from "react";
import { useStyles } from "./styles";
import { motion } from "framer-motion";
import City from "../../../../../City";
import { CityData } from "../../../../../../hooks/types";

interface AnimatedCityProps {
  citiesLength: number;
  cities: CityData[];
  ease: [number, number, number, number];
  activeCity: string | null;
  setActiveCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const AnimatedCities: React.FC<AnimatedCityProps> = ({
  cities,
  citiesLength,
  ease,
  activeCity,
  setActiveCity,
}) => {
  const { container } = useStyles();

  return (
    <section className={container}>
      <motion.div
        animate={{ y: -citiesLength * 0.8 }}
        transition={{
          duration: 25,
          repeatType: "reverse",
          repeat: Infinity,
          ease,
        }}
      >
        {cities.map(({ id, name, image, numberOfLocations }) => (
          <City key={id} {...{ id, name, image, numberOfLocations, activeCity, setActiveCity }} />
        ))}
      </motion.div>
    </section>
  );
};

export default AnimatedCities;
