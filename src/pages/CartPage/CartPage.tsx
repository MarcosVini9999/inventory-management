import { Box, Button, Typography } from "@mui/material";
import { ProductCartGenerator } from "components/ProductCartList";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import {
  CartProductList,
  CartProductPriceViewer,
  CartWrapper,
} from "./CartPage.styles";

export const CartPage: React.FC = () => {
  const { cartListMemo, totalPayable } = React.useContext(ProductCardContext);
  return (
    <CartWrapper>
      <CartProductList>
        <Typography variant="subtitle2">Seu carrinho</Typography>
        <ProductCartGenerator productCartList={cartListMemo} />
      </CartProductList>
      <CartProductPriceViewer>
        <Box>
          <Typography>
            Frete <b>R$00.00</b>
          </Typography>
          <Typography>
            Desconto <b>R$00.00</b>
          </Typography>
        </Box>
        <Box>
          <Typography>
            Total <b>R${totalPayable}</b>
          </Typography>
        </Box>
        <Button variant="contained">Realizar compra</Button>
      </CartProductPriceViewer>
    </CartWrapper>
  );
};
