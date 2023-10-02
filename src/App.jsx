import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      id: "product",
      path: "/p/:productId",
      element: <ProductDetailsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
