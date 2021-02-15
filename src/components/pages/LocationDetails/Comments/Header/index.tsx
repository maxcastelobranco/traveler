import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { useStyles } from "./styles";

interface HeaderProps {
  initialRating: number;
}

const Header: React.FC<HeaderProps> = ({ initialRating }) => {
  const { container } = useStyles();

  return (
    <header className={container}>
      <div>
        <Typography variant="h4">Ratings</Typography>
        <Star color="secondary" />
        <Typography variant="h4" color="secondary">
          {initialRating}
        </Typography>
      </div>
      <div>
        <Button>Add</Button>
        <Button>See all</Button>
      </div>
    </header>
  );
};

export default Header;
