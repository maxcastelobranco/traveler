import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Cities from "./components/Cities";
import Link from "next/link";

const Content: React.FC = () => {
  const { container, title, description, button } = useStyles();

  return (
    <section className={container}>
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
      <Cities />
    </section>
  );
};

export default Content;
