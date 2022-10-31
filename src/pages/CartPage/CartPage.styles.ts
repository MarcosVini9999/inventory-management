import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const CartWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});
export const CartProductList = styled(Box)({
  "& h6": {
    margin: "-15px",
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
});
export const CartProductPriceViewer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  "& button": {
    width: "300px",
    backgroundColor: "#89D963",
  },
  "& button:hover": {
    backgroundColor: "#89D96399",
  },
});
