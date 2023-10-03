import { createContext, useEffect, useState } from "react";
import {
  createCartProduct,
  deleteCartProduct,
  getCartProducts,
} from "../apis/cart";

const defaultContext = {
  cartProducts: [],
  isEmpty: true,
  addProductToCart: async (productFieldId, quantity) => {},
  // HW: Implement removeProduct
  removeProduct: async (cartProductId) => {},
  // HW: Implement updateProductQuantity
  updateProductQuantity: async () => {},
  clearCart: async () => {},
};
const CartContext = createContext(defaultContext);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(defaultContext.cartProducts);
  const totalPrice = cartProducts.reduce((prev, curr) => {
    const productTotalPrice = curr.price * curr.quantities;
    return prev + productTotalPrice;
  }, 0);

  const fetchCartProducts = async () => {
    try {
      const records = await getCartProducts();
      const newCartProducts = records.map((record) => ({
        fieldId: record.id,
        title:
          record.fields.title_from_product_id &&
          record.fields.title_from_product_id[0],
        productFieldId: record.fields.product_id && record.fields.product_id[0],
        price: record.fields.price_from_product.length
          ? record.fields.price_from_product[0]
          : 0,
        quantities: record.fields.count,
      }));
      setCartProducts(newCartProducts);
      console.log(newCartProducts);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCartProducts();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        totalPrice,
        isEmpty: cartProducts.length === 0,
        addProductToCart: async (productFieldId, count) => {
          try {
            await createCartProduct({ productFieldId, count });
            await fetchCartProducts();
          } catch (error) {
            console.error(error);
          }
        },
        updateProductQuantity: async () => {},
        clearCart: async () => {
          for (const cartProduct of cartProducts) {
            await deleteCartProduct(cartProduct.fieldId);
          }
          await fetchCartProducts();
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
