import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface RatingProps {
  rate: number;
  count: number;
}

interface ProductProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Array<RatingProps>;
}

interface ProductCardProps {
  product: ProductProps;
  onPostNewProductOnCart: Function;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPostNewProductOnCart,
}) => {
  return (
    <Box>
      <Typography>{product.title}</Typography>
      <img src={product.image} alt="Product_Image" />
      <Button onClick={() => onPostNewProductOnCart(product)}>Comprar</Button>
    </Box>
  );
};
