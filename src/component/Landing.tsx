import CollapseNavbar from "./header/nav/CollapseNavbar";
import Menu from "./header/nav/Menu";
import NewCol from "./header/row/NewCol";
import Cart from "./main/cart/Cart";
import Brands from "./main/brands/Brands";
import SelerProduct from "./main/selerProduct/SelerProduct";

export default function Landing() {
  return (
    <>
      <div className="body">
        {/* start header */}
        <header className="display-flex-column">
          <div className="navbar-style w-full display-flex-column h-[33.25rem]">
            <CollapseNavbar />
            <Menu />
          </div>
          <NewCol />
        </header>
        {/* end header */}

        {/* start main */}
        <main>
          <Brands />
          <Cart />
          <SelerProduct />
        </main>
        {/* start main */}
        <footer></footer>
      </div>
    </>
  );
}
