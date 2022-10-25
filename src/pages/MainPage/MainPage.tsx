import { PageContainer } from "components/PageContainer";
import { ProductCardGenerator } from "components/ProductCardGenerator";
import { fakestoreApi } from "services/FakestoreApi";
import { ProductCardContext } from "contexts/CartContext";
import React from "react";

export const MainPage: React.FC = () => {
  const { postNewProductCardOnCart } = React.useContext(ProductCardContext);
  const [list, setList] = React.useState([]);
  const fetchData = async () => {
    try {
      const result = await fakestoreApi.get(`/products/`);
      setList(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  fetchData();

  return (
    <PageContainer>
      <ProductCardGenerator
        productList={list}
        onPostNewProductOnCart={postNewProductCardOnCart}
      ></ProductCardGenerator>
    </PageContainer>
  );
};
