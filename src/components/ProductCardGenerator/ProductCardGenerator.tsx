import { Box } from "@mui/material";
import { ProductCard } from "components/ProductCard/ProductCard";
import React from "react";
import { Container, ProductsWrapper } from "./ProductCardGenerator.styles";

interface RatingProps {
  rate: number;
  count: number;
}

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Array<RatingProps>;
}

interface ProductCardGeneratorProps {
  productList: Array<ProductCardProps>;
  onPostNewProductOnCart: Function;
}

export const ProductCardGenerator: React.FC<ProductCardGeneratorProps> = ({
  productList,
  onPostNewProductOnCart,
}) => {
  return (
    <Container>
      <ProductsWrapper>
        {productList.map(product => (
          <Box>
            <ProductCard
              product={product}
              onPostNewProductOnCart={onPostNewProductOnCart}
            />
          </Box>
        ))}
      </ProductsWrapper>
    </Container>
  );
};
