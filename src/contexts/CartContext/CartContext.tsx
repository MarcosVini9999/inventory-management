import React from "react";

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
  rating: Array<RatingProps>;
  amount: number;
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
  const isFoundInCart = (productId: number) => {
    return productCartList.some(element => {
      if (element.id === productId) {
        return true;
      }
      return false;
    });
  };
  const postNewProductCardOnCart = (ProductCard: ProductCardProps) => {
    if (!isFoundInCart(ProductCard.id)) {
      ProductCard.amount = 1;
      const novaLista = [...productCartList];
      novaLista.push(ProductCard);
      setProductCardList(novaLista);
    } else {
      productCartList.forEach(product => {
        if (product.id === ProductCard.id) {
          product.amount += 1;
        }
      });
    }
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
