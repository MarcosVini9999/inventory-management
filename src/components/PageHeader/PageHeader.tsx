import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const PageHeader: React.FC = () => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <Link to="/">Contact</Link>
      <Link to="/cart">
        <ShoppingCartIcon />0
      </Link>
    </React.Fragment>
  );
};
