import React, { useMemo } from "react";
import { categories, CityData, LocationData } from "../../../../hooks/types";
import CategoryItem from "../CategoryItem";
import { useStyles } from "./styles";
import Description from "../Description";
import TopLocations from "../TopLocations";
import LocationGrid from "../LocationGrid";

interface DetailsProps {
  city: CityData;
  locations: LocationData[];
}

const Details: React.FC<DetailsProps> = ({ city, locations }) => {
  const { container, contentContainer, categoriesContainer, row } = useStyles();
  const { name, description } = city;

  const { numberOfTouristSpots, numberOfFoodsAndDrinks, numberOfOrganizedEvents } = useMemo(() => {
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

    return {
      numberOfTouristSpots,
      numberOfFoodsAndDrinks,
      numberOfOrganizedEvents,
    };
  }, [locations]);

  const topLocations = useMemo(
    () => locations.sort((a, b) => (a.rating > b.rating ? -1 : 1)).slice(0, 4),
    [locations]
  );

  return (
    <main className={container}>
      <div className={contentContainer}>
        <div className={row}>
          <Description {...{ name, description }} />
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
        <TopLocations {...{ topLocations }} />
        <LocationGrid {...{ locations }} />
      </div>
    </main>
  );
};

export default Details;
