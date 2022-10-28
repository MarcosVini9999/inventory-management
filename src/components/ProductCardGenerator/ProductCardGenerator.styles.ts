import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  width: "100%",
});

export const ProductsWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
  gridGap: "3rem",
});
