import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)({
  cursor: "pointer",
  zIndex: "1",
  "&:hover": {
    transform: " translateY(-3px)",
    transitionProperty: "transform",
    transition: "all 0.6s ease",
  },
});

export const CardFooter = styled(Box)({
  "& .MuiCardActions-root": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const ProductTitle = styled(Typography)({
  fontSize: "20px",
});
