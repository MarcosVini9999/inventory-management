import { Button, Typography } from "@mui/material";
import { ProductCartGenerator } from "components/ProductCartList";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import {
  CartProductList,
  CartProductPriceViewer,
  CartWrapper,
} from "./CartPage.styles";

export const CartPage: React.FC = () => {
  const { cartListMemo, calculateTotalAmountToPay } =
    React.useContext(ProductCardContext);
  return (
    <CartWrapper>
      <CartProductList>
        <Typography variant="subtitle2">Seu carrinho</Typography>
        <ProductCartGenerator productCartList={cartListMemo} />
      </CartProductList>
      <CartProductPriceViewer>
        <Typography>
          Frete <b>R$00.00</b>
        </Typography>
        <Typography>
          Desconto <b>R$00.00</b>
        </Typography>
        <Typography>
          Total <b>R${calculateTotalAmountToPay().toFixed(2)}</b>
        </Typography>
        <Button variant="contained">Realizar compra</Button>
      </CartProductPriceViewer>
    </CartWrapper>
  );
};
