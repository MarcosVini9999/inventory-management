import React from "react";

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

interface CartContextProps {
  productCartList: ProductCardProps[];
  postNewProductCardOnCart: (ProductCard: ProductCardProps) => void;
}

interface ProductCardProviderProps {
  children: React.ReactNode;
}

export const ProductCardContext = React.createContext({} as CartContextProps);

export const ProductCardProvider: React.FC<ProductCardProviderProps> = ({
  children,
}) => {
  const [productCartList, setProductCardList] = React.useState<
    ProductCardProps[]
  >([]);
  const postNewProductCardOnCart = (ProductCard: ProductCardProps) => {
    const novaLista = [...productCartList];
    novaLista.push(ProductCard);
    setProductCardList(novaLista);
  };

  return (
    <ProductCardContext.Provider
      value={{
        productCartList,
        postNewProductCardOnCart,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
