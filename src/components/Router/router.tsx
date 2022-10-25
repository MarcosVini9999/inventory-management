import { CartPage } from "pages/CartPage";
import { MainPage } from "pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCardProvider } from "contexts/CartContext";
import React from "react";

export const Router: React.FC = () => {
  return (
    <ProductCardProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ProductCardProvider>
  );
};
