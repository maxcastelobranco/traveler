import React from "react";
import { LocationData } from "../../../../hooks/types";
import { Typography } from "@material-ui/core";
import LocationItem from "../LocationItem";
import { useStyles } from "./styles";
import { useActiveItem } from "../../../../hooks/useActiveItem";

interface TopLocationProps {
  topLocations: LocationData[];
}

const TopLocations: React.FC<TopLocationProps> = ({ topLocations }) => {
  const { container, locationsContainer } = useStyles();
  const { activeItem: activeLocation, setActiveItem: setActiveLocation } = useActiveItem();

  return (
    <div className={container}>
      <Typography variant="h4">Top locations</Typography>
      <div className={locationsContainer}>
        {topLocations.map(location => (
          <LocationItem
            key={location.id}
            {...location}
            {...{ activeLocation, setActiveLocation }}
          />
        ))}
      </div>
    </div>
  );
};

export default TopLocations;
