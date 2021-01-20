import React from "react";
import { Button, IconButton, useTheme } from "@material-ui/core";
import Logo from "../svgs/Logo";
import { useStyles } from "./styles";
import Link from "next/link";
import { JSX } from "@babel/types";
import { ArrowBack } from "@material-ui/icons";
import { Theme } from "../../theme";

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
  const {
    palette: {
      text: { hint },
    },
  } = useTheme<Theme>();
  const { container, buttonsContainer, goBackButton, goToLoginButton } = useStyles({
    boxShadow,
    backgroundColor,
  });

  return (
    <header className={container}>
      <div className={buttonsContainer}>
        <Link href={goBackButton ? "/cityList" : "/"}>
          <Button>
            <Logo {...{ backgroundColor }} />
            {showGoBackButton && (
              <Link href="/cityList">
                <IconButton className={goBackButton}>
                  <ArrowBack style={{ color: hint }} />
                </IconButton>
              </Link>
            )}
          </Button>
        </Link>
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
