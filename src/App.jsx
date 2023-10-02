import { useCallback, useEffect, useState } from "react";
import CartProvider from "./contexts/CartContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;
