// import { useCart } from "../../contexts/CartContext";
import DefaultLayout from "../../layouts/DefaultLayout";
import CartProductRow from "./CartProductRow";
const cartProducts = [
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
];
const CartPage = () => {
  //   const { cartProducts } = useCart();
  //   console.log(cartProducts);

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center align-center max-w-screen-2xl">
        {cartProducts.map((product) => {
          return <CartProductRow key={product.id} {...product} />;
        })}
      </div>
    </DefaultLayout>
  );
};

export default CartPage;
