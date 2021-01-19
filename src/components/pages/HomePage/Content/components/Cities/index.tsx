import React from "react";
import { useHomePageCities } from "../../../../../../hooks/swr/useHomePageCities";
import { CircularProgress, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { CITY_ITEM_HEIGHT } from "../../../constants";
import AnimatedCities from "../AnimatedCities";
import { useActiveCity } from "../../../../../../hooks/useActiveCity";

const LIMIT = 20;

const Cities: React.FC = () => {
  const { circularProgress } = useStyles();
  const theme = useTheme();
  const { cities, isLoading, error } = useHomePageCities(LIMIT);
  const { activeCity, setActiveCity } = useActiveCity();

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
      <AnimatedCities
        citiesLength={CITIES_LENGTH}
        cities={leftSideCities}
        ease={[0.65, 0, 0.35, 1]}
        {...{ activeCity, setActiveCity }}
      />
      <AnimatedCities
        citiesLength={CITIES_LENGTH}
        cities={rightSideCities}
        ease={[0.37, 0, 0.63, 1]}
        {...{ activeCity, setActiveCity }}
      />
    </>
  );
};

export default Cities;
