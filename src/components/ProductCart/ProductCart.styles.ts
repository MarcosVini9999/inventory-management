import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const ProductCartWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  "& div": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",
  },
});
export const ProductCartImage = styled("img")({
  width: "60px",
  height: "60px",
});
