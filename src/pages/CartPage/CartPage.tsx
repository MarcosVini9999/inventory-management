import { Box, Typography } from "@mui/material";
import { PageContainer } from "components/PageContainer";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";

export const CartPage: React.FC = () => {
  const { cartListMemo } = React.useContext(ProductCardContext);

  return (
    <React.Fragment>
      <Typography>Carrinho</Typography>
      {cartListMemo.map(product => (
        <Box>
          <Typography>{product.title}</Typography>
          <Typography>{product.amount}</Typography>
        </Box>
      ))}
    </React.Fragment>
  );
};
