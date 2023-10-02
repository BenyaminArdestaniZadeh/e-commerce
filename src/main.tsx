import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import pathConstants from "./routes/pathConstants.tsx";

const ProductList = React.lazy(() => import("./routes/ProductLists.tsx"));
const ProductPages = React.lazy(() => import("./routes/ProductPages.tsx"));
const ShoppingCart = React.lazy(() => import("./routes/ShoppingCart.tsx"));
const Login = React.lazy(() => import("./routes/Login.tsx"));
const Pricing = React.lazy(() => import("./routes/Pricing.tsx"));
const Landing = React.lazy(() => import("./component/Landing.tsx"));

const routes = [
  { path: pathConstants.LANDING, element: <Landing/> },

  { path: pathConstants.PRODUCTLISTS, element: <ProductList /> },
  { path: pathConstants.PRODUCTPAGES, element: <ProductPages /> },
  { path: pathConstants.SHOPPINGCART, element: <ShoppingCart /> },
  { path: pathConstants.LOGIN, element: <Login /> },
  { path: pathConstants.PRICING, element: <Pricing /> },
];
export default routes;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
