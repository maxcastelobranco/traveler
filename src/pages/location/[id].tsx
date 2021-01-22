import { NextPage } from "next";
import { useRouter } from "next/router";
import { Typography } from "@material-ui/core";

const Location: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return <Typography>{id}</Typography>;
};

export default Location;
