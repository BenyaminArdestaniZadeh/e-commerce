import "./App.css";
import "./fonts/Montserrat-Medium.ttf";
import Landing from "./component/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductLists from "./routes/ProductLists.tsx";
import ProductPages from "./routes/ProductPages.tsx";
import ShoppingCart from "./routes/ShoppingCart.tsx";
import Login from "./routes/Login.tsx";
import Pricing from "./routes/Pricing.tsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <div>Error Loading Information</div>,
    },
    {
      path: "/ProductLists/:",
      element: <ProductLists />,
      errorElement: "",
    },
    {
      path: "/ProductPages/:",
      element: <ProductPages />,
      errorElement: "",
    },
    {
      path: "/ShoppingCart/:",
      element: <ShoppingCart />,
      errorElement: "",
    },
    {
      path: "/Login/:",
      element: <Login />,
      errorElement: "",
    },
    {
      path: "/Pricing/:",
      element: <Pricing />,
      errorElement: "",
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
