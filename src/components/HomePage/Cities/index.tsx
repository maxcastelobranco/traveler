import React from "react";
import { useHomePageCities } from "../../../hooks/useHomePageCities";
import { CircularProgress, Typography, useTheme } from "@material-ui/core";
import City from "../City";
import { motion } from "framer-motion";
import { useStyles } from "./styles";
import { CITY_ITEM_HEIGHT } from "../constants";

const LIMIT = 20;

const Cities: React.FC = () => {
  const { container, circularProgress } = useStyles();
  const theme = useTheme();
  const { cities, isLoading, error } = useHomePageCities(LIMIT);

  if (error) {
    return (
      <Typography variant="h3" color="error">
        There was an error loading cities. ({`${error}`})
      </Typography>
    );
  }
  if (!cities || isLoading) {
    return <CircularProgress color="secondary" className={circularProgress} />;
  }

  const halfOfTheCities = cities.length / 2;
  const leftSideCities = cities.slice(0, halfOfTheCities);
  const rightSideCities = cities.slice(halfOfTheCities);
  const CITIES_LENGTH = halfOfTheCities * (CITY_ITEM_HEIGHT + theme.spacing(3) * 2);

  return (
    <>
      <section className={container} style={{ marginLeft: theme.spacing(8) }}>
        <motion.div
          animate={{ y: -CITIES_LENGTH * 0.8 }}
          transition={{
            duration: 25,
            repeatType: "reverse",
            repeat: Infinity,
            ease: [0.65, 0, 0.35, 1],
          }}
        >
          {leftSideCities.map(({ id, name, image, numberOfLocations }) => (
            <City key={id} {...{ name, image, numberOfLocations }} />
          ))}
        </motion.div>
      </section>
      <section className={container}>
        <motion.div
          animate={{ y: -CITIES_LENGTH * 0.8 }}
          transition={{
            duration: 25,
            repeatType: "reverse",
            repeat: Infinity,
            ease: [0.37, 0, 0.63, 1],
          }}
        >
          {rightSideCities.map(({ id, name, image, numberOfLocations }) => (
            <City key={id} {...{ name, image, numberOfLocations }} />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Cities;
