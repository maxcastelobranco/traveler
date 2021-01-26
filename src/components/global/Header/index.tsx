import React from "react";
import { Button, IconButton } from "@material-ui/core";
import Logo from "../../svgs/Logo";
import { useStyles } from "./styles";
import Link from "next/link";
import { JSX } from "@babel/types";
import { ArrowBack } from "@material-ui/icons";
import { useRouter } from "next/router";

interface HeaderProps {
  boxShadow?: boolean;
  showGoBackButton?: boolean;
  backgroundColor?: string;
  middleComponent?: JSX.Element;
}
const Header: React.FC<HeaderProps> = ({
  boxShadow,
  showGoBackButton = false,
  backgroundColor,
  middleComponent = <></>,
}) => {
  const { back } = useRouter();
  const { container, buttonsContainer, goBackButton, goToLoginButton } = useStyles({
    boxShadow,
    backgroundColor,
  });

  return (
    <header className={container}>
      <div className={buttonsContainer}>
        <Button onClick={back}>
          <Logo {...{ backgroundColor }} />
          {showGoBackButton && (
            <IconButton className={goBackButton}>
              <ArrowBack />
            </IconButton>
          )}
        </Button>
        {middleComponent}
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
