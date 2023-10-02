import { useState, useEffect } from "react";
import NewCol from "./header/row/NewCol";
import Cart from "./main/cart/Cart";
import Brands from "./main/brands/Brands";
import SelerProduct from "./main/selerProduct/SelerProduct";
import FeaturedProducts from "./main/featured products/FeaturedProducts";
import BestServices from "./main/best services/BestServies";
import FeaturePosts from "./main/feature posts/FeaturePosts";

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
      <div className="body min-w-[320px] sm:min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl">
        <header className="display-flex-row flex-wrap w-full">
          <NewCol screenSize={screenSize} />
        </header>
        <main>
          <Brands />
          <Cart />
          <SelerProduct />
          <FeaturedProducts />
          <BestServices />
          <FeaturePosts />
        </main>
      </div>
    </>
  );
}
