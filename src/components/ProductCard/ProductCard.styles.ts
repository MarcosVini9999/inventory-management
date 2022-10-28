import { styled } from "@mui/system";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const Container = styled(Box)({
  height: "600px",
  "&:hover": {
    transform: " translateY(-3px)",
    transitionProperty: "transform",
    transition: "all 0.6s ease",
  },
});
export const Pic = styled("img")({
  width: "330px",
  height: "320px",
});
