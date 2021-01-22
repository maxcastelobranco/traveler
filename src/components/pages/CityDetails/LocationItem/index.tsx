import React from "react";
import { LocationData } from "../../../../hooks/types";

type LocationItemProps = Omit<LocationData, "cityId" | "description" | "id">;

const LocationItem: React.FC<LocationItemProps> = ({}) => {
  return <div></div>;
};

export default LocationItem;
