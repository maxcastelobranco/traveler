import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { CategoryOptions, LocationData } from "../../../../hooks/swr/types";
import { AnimatePresence, motion } from "framer-motion";
import LocationItem from "../LocationItem";
import { useActiveItem } from "../../../../hooks/useActiveItem";
import Header from "./components/Header";

interface LocationGridProps {
  locations: LocationData[];
}

const LocationGrid: React.FC<LocationGridProps> = ({ locations }) => {
  const { container, grid } = useStyles();
  const { activeItem: activeLocation, setActiveItem: setActiveLocation } = useActiveItem();
  const [selectedCategory, setSelectedCategory] = useState<CategoryOptions>("All");
  const [selectedLocations, setSelectedLocations] = useState(locations);

  useEffect(() => {
    switch (selectedCategory) {
      case "All":
        setSelectedLocations(locations);
        break;
      case "Tourist Spots":
        setSelectedLocations(locations.filter(({ category }) => category === "Tourist Spots"));
        break;
      case "Food and Drinks":
        setSelectedLocations(locations.filter(({ category }) => category === "Food and Drinks"));
        break;
      case "Organized Events":
        setSelectedLocations(locations.filter(({ category }) => category === "Organized Events"));
        break;
    }
  }, [locations, selectedCategory]);

  return (
    <div className={container}>
      <Header {...{ selectedCategory, setSelectedCategory }} />
      <Grid container spacing={4} justify="center" alignItems="center">
        <AnimatePresence>
          {selectedLocations.map(location => (
            <Grid item key={location.id}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LocationItem {...location} {...{ activeLocation, setActiveLocation }} />
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </div>
  );
};

export default LocationGrid;
