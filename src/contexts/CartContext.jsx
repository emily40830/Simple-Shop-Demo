/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { getCartProducts } from "../apis/cart";

const defaultContext = {
  cartProducts: [],
  isEmpty: true,
  addProduct: async (productId, quantity) => {},
  removeProduct: async (cartProductId) => {},
  updateProductQuantity: async () => {},
  clearCart: async () => {},
};
export const CartContext = createContext(defaultContext);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(defaultContext.cartProducts);
  const totalPrice = cartProducts.reduce((prev, curr) => {
    const productTotalPrice = curr.price * curr.quantities;
    return prev + productTotalPrice;
  }, 0);
  useEffect(() => {
    getCartProducts()
      .then((records) => {
        console.log(records);
        const newCartProducts = records.map((record) => ({
          fieldId: record.id,
          title:
            record.fields.title_from_product_id.length &&
            record.fields.title_from_product_id[0],
          productFieldId:
            record.fields.product_id.length && record.fields.product_id[0],
          price: record.fields.price_from_product.length
            ? record.fields.price_from_product[0]
            : 0,
          quantities: record.fields.count,
        }));
        setCartProducts(newCartProducts);
        console.log(newCartProducts);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        totalPrice,
        isEmpty: cartProducts.length === 0,
        addProductToCart: (productFieldId, count) => {
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
