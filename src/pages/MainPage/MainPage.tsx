import { PageContainer } from "components/PageContainer";
import { ProductCardGenerator } from "components/ProductCardGenerator";
import { fakestoreApi } from "services/FakestoreApi";
import React from "react";

export const MainPage: React.FC = () => {
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
      <ProductCardGenerator productList={list}></ProductCardGenerator>
    </PageContainer>
  );
};
