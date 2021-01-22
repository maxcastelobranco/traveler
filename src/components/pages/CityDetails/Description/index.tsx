import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface DescriptionProps {
  name: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({ name, description }) => {
  const { container, title } = useStyles();

  return (
    <div className={container}>
      <Typography variant="h3" className={title}>
        {name}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default Description;
