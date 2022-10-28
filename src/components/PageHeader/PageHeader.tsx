import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container } from "./PageHeader.styles";
import logo from "assets/imgs/logo-header.svg";
import { Box } from "@mui/material";
import { ProductCardContext } from "contexts/CartContext";

export const PageHeader: React.FC = () => {
  const { productCartList } = React.useContext(ProductCardContext);

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <Box className="tool-bar">
        <Link to="/">HOME</Link>
        <Link to="/">PRODUCTS</Link>
        <Link to="/">CONTACT</Link>
        <Link to="/cart">
          <ShoppingCartIcon />
          {productCartList.length}
        </Link>
      </Box>
    </Container>
  );
};
