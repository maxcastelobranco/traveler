import React from "react";
import { Typography } from "@material-ui/core";
import { categories, CityData, LocationData } from "../../../../hooks/types";
import CategoryItem from "../CategoryItem";
import { useStyles } from "./styles";

interface DetailsProps {
  city: CityData;
  locations: LocationData[];
}

const Details: React.FC<DetailsProps> = ({ city, locations }) => {
  const {
    container,
    contentContainer,
    descriptionContainer,
    categoriesContainer,
    title,
  } = useStyles();
  const { name, description } = city;

  let numberOfTouristSpots = 0;
  let numberOfFoodsAndDrinks = 0;
  let numberOfOrganizedEvents = 0;

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].category === "Tourist Spots") {
      numberOfTouristSpots++;
    }
    if (locations[i].category === "Food and Drinks") {
      numberOfFoodsAndDrinks++;
    }
    if (locations[i].category === "Organized Events") {
      numberOfOrganizedEvents++;
    }
  }

  return (
    <main className={container}>
      <div className={contentContainer}>
        <div className={descriptionContainer}>
          <Typography variant="h3" className={title}>
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
        <div className={categoriesContainer}>
          {categories.map((category, index) => {
            const categoryCount =
              category === "Tourist Spots"
                ? numberOfTouristSpots
                : category === "Food and Drinks"
                ? numberOfFoodsAndDrinks
                : numberOfOrganizedEvents;

            return <CategoryItem key={category} {...{ category, categoryCount, index }} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Details;
