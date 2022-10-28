import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  height: "100px",
  left: "0px",
  top: "0px",
  background: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
  paddingBlock: "10px",
  paddingInline: "20px",
  "& .tool-bar": {
    display: "flex",
    gap: "72px",
    alignItems: "center",
    "& a": {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      textDecoration: "none",
      height: "19px",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "16px",
      lineHeight: "19px",
      color: "#000000",
    },
    "a:hover": {
      transform: " translateY(-2px)",
      transitionProperty: "transform",
      filter: "brightness(0.8)",
      transition: "all 0.6s ease",
    },
    "& a:last-child": {
      color: "red",
    },
  },
});
