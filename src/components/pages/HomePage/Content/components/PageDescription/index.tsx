import React from "react";
import { Button, Typography } from "@material-ui/core";
import Link from "next/link";
import { useStyles } from "./styles";

const PageDescription: React.FC = () => {
  const { title, description, button } = useStyles();

  return (
    <aside>
      <Typography variant="h1" className={title}>
        Live a big
        <br />
        adventure
      </Typography>
      <Typography variant="body1" className={description}>
        Discover amazing locations to visit
        <br />
        all over the world.
      </Typography>
      <Link href="cityList">
        <Button className={button}>Discover our cities</Button>
      </Link>
    </aside>
  );
};

export default PageDescription;
