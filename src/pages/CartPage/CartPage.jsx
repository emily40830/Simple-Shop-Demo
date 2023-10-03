import { CartContext } from "../../contexts/CartContext";
import { Button } from "antd";
import DefaultLayout from "../../layouts/DefaultLayout";
import CartProductRow from "./CartProductRow";
import { useContext, useState } from "react";

const CartPage = () => {
  const [loading, setLoading] = useState(false);
  const { cartProducts, totalPrice, clearCart, isEmpty } =
    useContext(CartContext);

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center align-center max-w-screen-2xl">
        {cartProducts.map((product) => {
          return <CartProductRow key={product.fieldId} {...product} />;
        })}
      </div>
      <hr />
      <div className="flex justify-end mb-10">Total: NT$ {totalPrice} </div>
      <Button
        type="primary"
        className="bg-primary"
        block
        loading={loading}
        disabled={isEmpty}
        onClick={() => {
          setLoading(true);
          alert("您確定要送出訂單？");
          clearCart().finally(() => setLoading(false));
        }}
      >
        送出定單
      </Button>
    </DefaultLayout>
  );
};

export default CartPage;
