import React from "react";
import { Button, Typography } from "@material-ui/core";
import Logo from "../svgs/Logo";
import { useStyles } from "./styles";

const Header: React.FC = () => {
  const { container, goToLoginButton } = useStyles();

  return (
    <header className={container}>
      <Logo />
      <Button className={goToLoginButton}>
        <Typography variant="button" color="primary">
          Restricted access
        </Typography>
      </Button>
    </header>
  );
};

export default Header;
