import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Footer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "Black",
  color: "white",
  width: "100%",
  "& a": {
    color: "red",
    textDecoration: "none",
  },
  "& a:hover": {
    textDecoration: "underline",
  },
});

export const FooterContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBlock: "30px",
});
