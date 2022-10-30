import { CartPage } from "pages/CartPage";
import { MainPage } from "pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCardProvider } from "contexts/CartContext";
import React from "react";
import { ContactPage } from "pages/ContactPage";
import { PageContainer } from "components/PageContainer";

export const Router: React.FC = () => {
  return (
    <ProductCardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route path="" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductCardProvider>
  );
};
