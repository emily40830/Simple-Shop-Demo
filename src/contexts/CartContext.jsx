/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const defaultContext = {
  cartProducts: [
    {
      id: 1,
      title: "cccc",
      count: 1,
    },
    {
      id: 2,
      title: "bbb",
      count: 4,
    },
  ],
  isEmpty: true,
  addProduct: async (productId, quantity) => {},
  updateProductQuantity: async (productId, quantity) => {},
  removeProduct: async (productId) => {},
  clearCart: async () => {},
};
export const CartContext = createContext(defaultContext);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(defaultContext.cartProducts);
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        isEmpty: cartProducts.length === 0,
        addProduct: (productId) => {
          setCartProducts((prevProducts) => [
            ...prevProducts,
            { id: productId, title: "productId" + "fdsfds" },
          ]);
        },
        updateProductQuantity: () => {},
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
