import React from "react";
import { Grid } from "@material-ui/core";
import City from "../../../City";
import { CityData } from "../../../../hooks/types";

interface CityGridProps {
  renderedCities: CityData[];
  activeCity: string | null;
  setActiveCity: React.Dispatch<React.SetStateAction<string | null>>;
}

const CityGrid: React.FC<CityGridProps> = ({ renderedCities, activeCity, setActiveCity }) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={0}>
      {renderedCities.map(({ id, image, name, numberOfLocations }) => (
        <Grid key={id} item>
          <City {...{ id, image, name, numberOfLocations, activeCity, setActiveCity }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CityGrid;
