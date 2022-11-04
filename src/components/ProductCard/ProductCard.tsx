import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardFooter, Container, ProductTitle } from "./ProductCard.styles";

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
}

interface ProductCardProps {
  product: ProductProps;
  onPostNewProductOnCart: Function;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPostNewProductOnCart,
}) => {
  const navigate = useNavigate();
  const onProductClick = () => navigate(`/products/${product.id}`);

  return (
    <Container>
      <Card sx={{ minWidth: 250 }}>
        <CardMedia
          component="img"
          height="320"
          image={product.image}
          alt="green iguana"
          onClick={() => {
            onProductClick();
          }}
        />
        <CardContent
          onClick={() => {
            onProductClick();
          }}
        >
          {product.title.length > 20 ? (
            <ProductTitle gutterBottom variant="h5">
              {product.title.slice(0, 20)}...
            </ProductTitle>
          ) : (
            <ProductTitle gutterBottom variant="h5">
              {product.title}
            </ProductTitle>
          )}
          <Typography gutterBottom variant="subtitle2" component="div">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description.slice(0, 60)}...
          </Typography>
        </CardContent>
        <CardFooter>
          <CardActions>
            <Typography>R${product.price}</Typography>
            <Button
              size="small"
              variant="contained"
              onClick={() => onPostNewProductOnCart(product)}
            >
              Comprar
            </Button>
          </CardActions>
        </CardFooter>
      </Card>
    </Container>
  );
};
