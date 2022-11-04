import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ProductPageContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "5px",
  "& .productView": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "5%",
  },
  "& .productDescription": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "5%",
  },
});

export const ProductImage = styled("img")({
  width: "350px",
});
