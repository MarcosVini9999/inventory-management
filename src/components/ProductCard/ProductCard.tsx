import { Box, Typography } from "@mui/material";

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

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <img src={image} alt="Product_Image" />
    </Box>
  );
};
