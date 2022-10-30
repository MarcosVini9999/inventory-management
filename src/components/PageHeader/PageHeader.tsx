import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "./PageHeader.styles";
import logo from "assets/imgs/logo-header.svg";
import { Box } from "@mui/material";
import { ProductCardContext } from "contexts/CartContext";

export const PageHeader: React.FC = () => {
  const { cartListMemo } = React.useContext(ProductCardContext);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Box className="tool-bar">
        <Link to="/">HOME</Link>
        <Link to="/">PRODUCTS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart">
          <ShoppingCartIcon />
          {cartListMemo.length}
        </Link>
      </Box>
    </Container>
  );
};
