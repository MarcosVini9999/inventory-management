import { ProductCardGenerator } from "components/ProductCardGenerator";
import { fakestoreApi } from "services/FakestoreApi";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";
import { SimpleBackdrop } from "components/Backdrop";

export const MainPage: React.FC = () => {
  const { postNewProductCardOnCart } = React.useContext(ProductCardContext);
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fakestoreApi.get(`/products/`);
        if (list !== result.data) setList(result.data);
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
        <ProductCardGenerator
          productList={list}
          onPostNewProductOnCart={postNewProductCardOnCart}
        ></ProductCardGenerator>
      )}
    </React.Fragment>
  );
};
