import { Box } from "@mui/material";
import { ProductCard } from "components/ProductCard/ProductCard";

interface RatingProps {
  rate: number;
  count: number;
}

interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Array<RatingProps>;
}

interface ProductCardGeneratorProps {
  productList: Array<ProductCardProps>;
}

export const ProductCardGenerator: React.FC<ProductCardGeneratorProps> = ({
  productList,
}) => {
  return (
    <Box>
      {productList.map(productList => (
        <Box>
          <ProductCard
            title={productList.title}
            price={productList.price}
            description={productList.description}
            category={productList.category}
            image={productList.image}
            rating={productList.rating}
          ></ProductCard>
        </Box>
      ))}
    </Box>
  );
};
