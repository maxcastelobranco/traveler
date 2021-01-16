import React from "react";
import { Button } from "@material-ui/core";
import Logo from "../svgs/Logo";
import { useStyles } from "./styles";
import Link from "next/link";

interface HeaderProps {
  boxShadow?: boolean;
}
const Header: React.FC<HeaderProps> = ({ boxShadow }) => {
  const { container, buttonsContainer, goToLoginButton } = useStyles({ boxShadow });

  return (
    <header className={container}>
      <div className={buttonsContainer}>
        <Logo />
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
