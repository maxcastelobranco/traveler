import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { useStyles } from "./styles";

interface HeaderProps {
  initialRating: number;
  openAllCommentsDialog(): void;
}

const Header: React.FC<HeaderProps> = ({ initialRating, openAllCommentsDialog }) => {
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
        <Button onClick={openAllCommentsDialog}>See all</Button>
      </div>
    </header>
  );
};

export default Header;
