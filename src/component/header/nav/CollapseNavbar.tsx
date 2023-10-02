import { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import Register from "./Register";

export default function CollapseNavbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="w-full display-flex-row justify-around gap-3 mb-4 px-3 md:justify-between">
        <div className="logo sm:w-1/3 md:w-auto">
          <div className="navbar-brand  md:p-0">
            <h3 className="h3 py-3  xl:w-auto">Bandage</h3>
          </div>
        </div>

        <div className="icons display-flex-row w-auto gap-5 md:hidden">
          <img src="../svg/icons/SearchIcon.svg" alt="SearchIcon" />
          <img src="../svg/icons/ShopIcon.svg" alt="ShopIcon" />
          <button
            onClick={handleToggleChange}
            className="inline-flex md:hidden"
          >
            <img src="../svg/icons/MenuIcon.svg" alt="MenuIcon" />
          </button>
        </div>
        <div className="md:desktop-display md:max-w-[85%] lg:w-[80%]">
          <NavbarDesktop />
          <Register />
        </div>
      </nav>
      <NavbarMobile toggle={toggle} />
    </>
  );
}
// <NavbarMobile toggle={toggle}/>
