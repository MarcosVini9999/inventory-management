import { Box, Typography } from "@mui/material";
import { PageContainer } from "components/PageContainer";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";

export const CartPage: React.FC = () => {
  const { productCartList } = React.useContext(ProductCardContext);

  return (
    <PageContainer>
      <Typography>Carrinho</Typography>
      {productCartList.map(product => (
        <Box>
          <Typography>{product.title}</Typography>
        </Box>
      ))}
    </PageContainer>
  );
};
