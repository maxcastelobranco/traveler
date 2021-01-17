import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../svgs/Logo";
import { useStyles } from "./styles";
import Link from "next/link";
import { JSX } from "@babel/types";

interface HeaderProps {
  boxShadow?: boolean;
  backgroundColor?: string;
  searchCities?: JSX.Element;
}
const Header: React.FC<HeaderProps> = ({ boxShadow, backgroundColor, searchCities = <></> }) => {
  const { container, buttonsContainer, goToLoginButton } = useStyles({
    boxShadow,
    backgroundColor,
  });

  return (
    <header className={container}>
      <div className={buttonsContainer}>
        <Logo {...{ backgroundColor }} />
        {searchCities}
        <Link href="login">
          <Button className={goToLoginButton} color="primary">
            Restricted access
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
