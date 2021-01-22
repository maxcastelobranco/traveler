import React, { useEffect, useState } from "react";
import { Button, Grid, Typography, useTheme } from "@material-ui/core";
import { useStyles } from "./styles";
import { LocationData } from "../../../../hooks/types";
import { Theme } from "../../../../theme";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import LocationItem from "../LocationItem";
import { useActiveItem } from "../../../../hooks/useActiveItem";
import * as faker from "faker";

interface LocationGridProps {
  locations: LocationData[];
}

type Category = "All" | "Tourist Spots" | "Food and Drinks" | "Organized Events";
const categories: Category[] = ["All", "Tourist Spots", "Food and Drinks", "Organized Events"];

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
const transition: Transition = {
  type: "spring",
  bounce: 0.4,
};

const LocationGrid: React.FC<LocationGridProps> = ({ locations }) => {
  const {
    palette: {
      text: { primary, secondary },
    },
  } = useTheme<Theme>();
  const { container, titleContainer, categoriesContainer, categoryButton, underline } = useStyles();
  const { activeItem: activeLocation, setActiveItem: setActiveLocation } = useActiveItem();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
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
      <div className={titleContainer}>
        <Typography variant="h4">Discover all locations</Typography>
        <div className={categoriesContainer}>
          {categories.map(category => {
            const isSelected = category === selectedCategory;

            return (
              <Button
                key={category}
                className={categoryButton}
                style={{
                  color: isSelected ? primary : secondary,
                }}
                onClick={() => {
                  setSelectedCategory(category);
                }}
              >
                {category}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className={underline}
                      {...{ variants, transition }}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                    />
                  )}
                </AnimatePresence>
              </Button>
            );
          })}
        </div>
      </div>
      <Grid container spacing={4} justify="center" alignItems="center">
        <AnimatePresence exitBeforeEnter={true}>
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
