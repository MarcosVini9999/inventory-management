import { Box, Button, Typography } from "@mui/material";
import { SimpleBackdrop } from "components/Backdrop";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import { useLocation } from "react-router-dom";
import { fakestoreApi } from "services/FakestoreApi";
import { ProductImage, ProductPageContainer } from "./ProductPage.style";

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

export const ProductPage: React.FC = () => {
  const { postNewProductCardOnCart } = React.useContext(ProductCardContext);
  const [product, setProduct] = React.useState<ProductCardProps>(
    {} as ProductCardProps,
  );
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productID = Number(location.pathname.split("/").reverse()[0]);
      try {
        const result = await fakestoreApi.get(`/products/${productID}`);
        setProduct(result.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <SimpleBackdrop open={loading} />
      ) : (
        <ProductPageContainer>
          <Box className="productView">
            <Typography variant="caption">ID:{product.id}</Typography>
            <ProductImage
              src={product.image}
              alt={`Imagem do ${product.title}`}
            />
          </Box>
          <Box className="productDescription">
            <Typography variant="h2">{product.title}</Typography>
            <Typography variant="subtitle2">{product.category}</Typography>
            <Typography variant="subtitle1">{product.description}</Typography>
            <Button
              size="small"
              variant="contained"
              onClick={() => postNewProductCardOnCart(product)}
            >
              Comprar
            </Button>
          </Box>
        </ProductPageContainer>
      )}
    </React.Fragment>
  );
};
