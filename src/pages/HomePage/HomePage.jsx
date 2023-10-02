import { useContext, useState } from "react";
// import { CartContext } from "../contexts/CartContext";

const HomePage = () => {
  //   const { cartProducts, addProduct } = useContext(CartContext);
  const [input, setInput] = useState("");

  return (
    <div className="">HomePage</div>
    // <>
    //   <input value={input} onChange={(e) => setInput(e.target.value)} />
    //   {/* <button
    //     onClick={() => {
    //       if (input) {
    //         addProduct(input);
    //       }
    //     }}
    //   > */}
    //     add product
    //   </button>
    //   <div>{JSON.stringify(cartProducts)}</div>
    // </>
  );
};

export default HomePage;
