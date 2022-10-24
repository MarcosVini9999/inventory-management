import { Link, Typography } from "@mui/material";
import React from "react";

export const PageFooter: React.FC = () => {
  return (
    <React.Fragment>
      <Typography>Developed by</Typography>
      <Link href="https://github.com/MarcosVini9999" target="_blank">
        Marcos Vinicius Andrade
      </Link>
    </React.Fragment>
  );
};
