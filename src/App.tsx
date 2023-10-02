import "./App.css";
import "./fonts/Montserrat-Medium.ttf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./main";
import LandingPageLayout from "./layouts/LandingPageLayout";
// import ProductLists from "./routes/ProductLists.tsx";
// import ProductPages from "./routes/ProductPages.tsx";
// import ShoppingCart from "./routes/ShoppingCart.tsx";
// import Login from "./routes/Login.tsx";
// import Pricing from "./routes/Pricing.tsx";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <LandingPageLayout />,
      errorElement: <div>Error Loading Information</div>,
      children: routes,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
