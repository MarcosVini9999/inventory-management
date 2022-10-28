import { Button, Typography } from "@mui/material";
import React from "react";
import { Container, Pic } from "./ProductCard.styles";

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
    <Container>
      <Pic src={product.image} alt="Product_Image" />
      <Typography>{product.title}</Typography>
      <Typography>{product.price}</Typography>
      <Typography>{product.category}</Typography>
      <Typography>{product?.description.slice(0, 75)}...</Typography>
      <Button onClick={() => onPostNewProductOnCart(product)}>
        Adicionar ao Carrinho
      </Button>
    </Container>
  );
};
