import { ArrowBackIos, ArrowForwardIos, Delete } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import { ProductCartImage, ProductCartWrapper } from "./ProductCart.styles";

interface RatingProps {
  rate: number;
  count: number;
}

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingProps;
  amount: number;
}

interface ProductCartProps {
  product: ProductProps;
}

export const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  const { putProductOnCart, removeOnlyOnePoductOnCart, removeProductOnCart } =
    React.useContext(ProductCardContext);
  return (
    <ProductCartWrapper>
      <Box>
        <ProductCartImage src={product.image} alt="Product" />
        <Typography>{product.title.slice(0, 50)}</Typography>
      </Box>
      <Box>
        <Box className="productCartOptionsAmount">
          <Button onClick={() => removeOnlyOnePoductOnCart(product)}>
            <ArrowBackIos />
          </Button>
          <Typography>Quantidade: {product.amount}</Typography>
          <Button onClick={() => putProductOnCart(product)}>
            <ArrowForwardIos />
          </Button>
        </Box>
        <Button onClick={() => removeProductOnCart(product)}>
          <Delete />
        </Button>
      </Box>
    </ProductCartWrapper>
  );
};
