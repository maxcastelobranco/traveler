import React from "react";
import { useStyles } from "./styles";
import { LocationData } from "../../../../hooks/swr/types";
import Details from "../Details";
import Comments from "../Comments";

interface ContentProps {
  locationData: LocationData;
}

const Content: React.FC<ContentProps> = ({ locationData }) => {
  const { container } = useStyles();
  const { id, rating } = locationData;

  return (
    <div className={container}>
      <Details {...locationData} />
      <Comments locationId={id} initialRating={rating} />
    </div>
  );
};

export default Content;
