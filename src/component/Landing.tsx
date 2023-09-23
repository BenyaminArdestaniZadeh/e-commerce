import { useState, useEffect } from "react";
import CollapseNavbar from "./header/nav/CollapseNavbar";
import NewCol from "./header/row/NewCol";
import Cart from "./main/cart/Cart";
import Brands from "./main/brands/Brands";
import SelerProduct from "./main/selerProduct/SelerProduct";
import FeaturedProducts from "./main/featured products/FeaturedProducts";
import BestServices from "./main/best services/BestServies";
import FeaturePosts from "./main/feature posts/FeaturePosts";
import Footer from "./footer/Footer";

export default function Landing() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <div className="body max-w-[480px]">
        {/* start header */}
        <header className="display-flex-row">
          <CollapseNavbar />
          <NewCol />
        </header>
        {/* end header */}

        {/* start main */}
        <main>
          <Brands />
          <Cart />
          <SelerProduct />
          <FeaturedProducts />
          <BestServices />
          <FeaturePosts />
        </main>
        {/* start main */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
