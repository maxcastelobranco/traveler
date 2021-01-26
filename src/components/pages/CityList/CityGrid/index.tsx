import React from "react";
import { Grid } from "@material-ui/core";
import CityItem from "../../../global/CityItem";
import { CityData } from "../../../../hooks/swr/types";
import { useStyles } from "./styles";

interface CityGridProps {
  renderedCities: CityData[];
  activeCity: string | null;
  setActiveCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const CityGrid: React.FC<CityGridProps> = ({ renderedCities, activeCity, setActiveCity }) => {
  const { container } = useStyles();

  return (
    <Grid className={container} container justify="center" alignItems="center" spacing={0}>
      {renderedCities.map(({ id, image, name, numberOfLocations }) => (
        <Grid key={id} item>
          <CityItem {...{ id, image, name, numberOfLocations, activeCity, setActiveCity }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CityGrid;
