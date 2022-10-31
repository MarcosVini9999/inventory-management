import { Link } from "@mui/material";
import React from "react";

export const ContactPage: React.FC = () => {
  return (
    <React.Fragment>
      <Link href="https://github.com/MarcosVini9999" target="_blank">
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/marcosvinciusandradedesousa/"
        target="_blank"
      >
        Linkedin
      </Link>
    </React.Fragment>
  );
};
