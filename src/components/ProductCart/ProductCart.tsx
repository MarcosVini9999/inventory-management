import { ArrowBackIos, ArrowForwardIos, Delete } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const {
    putOnlyOneProductOnCart,
    removeOnlyOnePoductOnCart,
    removeProductOnCart,
  } = React.useContext(ProductCardContext);
  const navigate = useNavigate();
  const onProductClick = () => navigate(`/products/${product.id}`);
  return (
    <ProductCartWrapper>
      <Box>
        <ProductCartImage src={product.image} alt="Product" />
        <Button
          onClick={() => {
            onProductClick();
          }}
        >
          {product.title.slice(0, 50)}
        </Button>
      </Box>
      <Box>
        <Box className="productCartOptionsAmount">
          <Button onClick={() => removeOnlyOnePoductOnCart(product)}>
            <ArrowBackIos />
          </Button>
          <Typography>{product.amount}</Typography>
          <Button onClick={() => putOnlyOneProductOnCart(product)}>
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
