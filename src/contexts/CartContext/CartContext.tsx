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
  rating: RatingProps;
  amount: number;
}

interface CartContextProps {
  cartListMemo: ProductCardProps[];
  postNewProductCardOnCart: (ProductCard: ProductCardProps) => void;
  putProductOnCart: (ProductCard: ProductCardProps) => void;
  removeOnlyOnePoductOnCart: (ProductCard: ProductCardProps) => void;
  removeProductOnCart: (ProductCard: ProductCardProps) => void;
  calculateTotalAmountToPay: () => number;
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
  const cartListMemo = React.useMemo(() => productCartList, [productCartList]);
  const replaceCartElement = (ProductCard: ProductCardProps) => {
    const newProductLista = [...productCartList];
    productCartList.forEach((element, index) => {
      if (ProductCard.id === element.id) {
        newProductLista.splice(index, 1, ProductCard);
      }
    });
    setProductCardList(newProductLista);
  };
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
      const newProductLista = [...productCartList];
      newProductLista.push(ProductCard);
      setProductCardList(newProductLista);
    } else {
      productCartList.forEach(product => {
        if (product.id === ProductCard.id) {
          product.amount += 1;
        }
      });
    }
  };
  const putProductOnCart = (ProductCard: ProductCardProps) => {
    const newProductCard = ProductCard;
    newProductCard.amount += 1;
    replaceCartElement(newProductCard);
  };
  const removeOnlyOnePoductOnCart = (ProductCard: ProductCardProps) => {
    if (ProductCard.amount > 1) {
      const newProductCard = ProductCard;
      newProductCard.amount += 1;
      replaceCartElement(newProductCard);
    }
  };
  const removeProductOnCart = (ProductCard: ProductCardProps) => {
    setProductCardList(
      productCartList.filter(product => product.id !== ProductCard.id),
    );
  };
  const calculateTotalAmountToPay = () => {
    return productCartList.reduce(
      (total, product) => total + product.amount * product.price,
      0,
    );
  };

  return (
    <ProductCardContext.Provider
      value={{
        cartListMemo,
        postNewProductCardOnCart,
        putProductOnCart,
        removeProductOnCart,
        removeOnlyOnePoductOnCart,
        calculateTotalAmountToPay,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
