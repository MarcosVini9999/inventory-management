import { ProductCart } from "components/ProductCart/ProductCart";
import React from "react";
import { Container } from "./ProductCartGenerator.styles";

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
  rating: RatingProps;
  amount: number;
}

interface ProductCartGeneratorProps {
  productCartList: Array<ProductCardProps>;
}

export const ProductCartGenerator: React.FC<ProductCartGeneratorProps> = ({
  productCartList,
}) => {
  return (
    <Container>
      {productCartList.map(product => (
        <ProductCart product={product} />
      ))}
    </Container>
  );
};
