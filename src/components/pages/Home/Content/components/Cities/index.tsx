import React from "react";
import { useHomePageCities } from "../../../../../../hooks/swr/useHomePageCities";
import { LinearProgress, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { CITY_ITEM_HEIGHT } from "../../../constants";
import AnimatedCities from "../AnimatedCities";
import { useActiveItem } from "../../../../../../hooks/useActiveItem";

const LIMIT = 20;

const Cities: React.FC = () => {
  const { circularProgress } = useStyles();
  const theme = useTheme();
  const { cities, isLoading, error } = useHomePageCities(LIMIT);
  const { activeItem: activeCity, setActiveItem: setActiveCity } = useActiveItem();

  if (error) {
    return (
      <Typography variant="h3" color="error">
        There was an error loading cities. ({`${error}`})
      </Typography>
    );
  }
  if (!cities || isLoading) {
    return <LinearProgress color="secondary" className={circularProgress} />;
  }

  const halfOfTheCities = cities.length / 2;
  const leftSideCities = cities.slice(0, halfOfTheCities);
  const rightSideCities = cities.slice(halfOfTheCities);
  const citiesLength = halfOfTheCities * (CITY_ITEM_HEIGHT + theme.spacing(3) * 2);

  return (
    <>
      <AnimatedCities
        cities={leftSideCities}
        ease={[0.65, 0, 0.35, 1]}
        {...{ activeCity, setActiveCity, citiesLength }}
      />
      <AnimatedCities
        cities={rightSideCities}
        ease={[0.37, 0, 0.63, 1]}
        {...{ activeCity, setActiveCity, citiesLength }}
      />
    </>
  );
};

export default Cities;
