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
  totalPayable: number;
  putProductOnCart: (ProductCard: ProductCardProps) => void;
  removeOnlyOnePoductOnCart: (ProductCard: ProductCardProps) => void;
  removeProductOnCart: (ProductCard: ProductCardProps) => void;
}

interface ProductCardProviderProps {
  children: React.ReactNode;
}

export const ProductCardContext = React.createContext({} as CartContextProps);

export const ProductCardProvider: React.FC<ProductCardProviderProps> = ({
  children,
}) => {
  const [totalPayable, setTotalPayable] = React.useState(0);
  const [productCartList, setProductCardList] = React.useState<
    ProductCardProps[]
  >([]);
  const cartListMemo = React.useMemo(() => productCartList, [productCartList]);
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
    setTotalPayable(totalPayable + ProductCard.price);
  };
  const putProductOnCart = (ProductCard: ProductCardProps) => {
    if (ProductCard.amount < ProductCard.rating.count) {
      ProductCard.amount = ProductCard.amount + 1;
      setTotalPayable(totalPayable + ProductCard.price);
    } else {
      alert("Quantidade insuficiente no estoque");
    }
  };
  const removeOnlyOnePoductOnCart = (ProductCard: ProductCardProps) => {
    if (ProductCard.amount > 1) {
      ProductCard.amount = ProductCard.amount - 1;
      setTotalPayable(totalPayable - ProductCard.price);
    }
  };
  const removeProductOnCart = (ProductCard: ProductCardProps) => {
    setTotalPayable(totalPayable - ProductCard.price * ProductCard.amount);
    setProductCardList(
      productCartList.filter(product => product.id !== ProductCard.id),
    );
  };

  return (
    <ProductCardContext.Provider
      value={{
        cartListMemo,
        postNewProductCardOnCart,
        totalPayable,
        putProductOnCart,
        removeProductOnCart,
        removeOnlyOnePoductOnCart,
      }}
    >
      {children}
    </ProductCardContext.Provider>
  );
};
