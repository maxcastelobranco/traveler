import React from "react";
import { useStyles } from "./styles";
import Cities from "./components/Cities";
import PageDescription from "./components/PageDescription";

const Content: React.FC = () => {
  const { container } = useStyles();

  return (
    <section className={container}>
      <PageDescription />
      <Cities />
    </section>
  );
};

export default Content;
