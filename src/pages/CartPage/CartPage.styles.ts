import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const CartWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
  gridGap: "5px",
});
export const CartProductList = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& h6": {
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
});
export const CartProductPriceViewer = styled(Box)({
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  "& button": {
    width: "300px",
    backgroundColor: "#89D963",
  },
  "& button:hover": {
    backgroundColor: "#89D96399",
  },
});
