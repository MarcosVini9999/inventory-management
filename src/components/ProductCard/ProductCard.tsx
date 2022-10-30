import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { CardFooter, Container } from "./ProductCard.styles";

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
    // <Container>
    //   <Pic src={product.image} alt="Product_Image" />
    //   <Typography>{product.title}</Typography>
    //   <Typography>{product.price}</Typography>
    //   <Typography>{product.category}</Typography>
    //   <Typography>{product?.description.slice(0, 75)}...</Typography>
    //   <Button onClick={() => onPostNewProductOnCart(product)}>
    //     Adicionar ao Carrinho
    //   </Button>
    // </Container>
    <Container>
      <Card sx={{ minWidth: 250 }}>
        <CardMedia
          component="img"
          height="320"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description.slice(0, 75)}...
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
