import { Link, Typography } from "@mui/material";
import React from "react";
import { Footer, FooterContent } from "./PageFooter.styles";
import logo from "assets/imgs/logo-header.svg";

export const PageFooter: React.FC = () => {
  return (
    <Footer>
      <FooterContent>
        <img src={logo} alt="Logo" />
        <Typography>
          Developed by{" "}
          <Link href="https://github.com/MarcosVini9999" target="_blank">
            Marcos Vinicius Andrade
          </Link>
        </Typography>
      </FooterContent>
    </Footer>
  );
};
