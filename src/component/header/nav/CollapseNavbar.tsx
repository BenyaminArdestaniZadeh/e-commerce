import { useState } from "react";
import { menu } from "../../../data/menu";

export default function CollapseNavbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="w-full display-flex-row mb-4">
        <div className="logo w-1/2 xl:w-auto">
          <div className="navbar-brand py-[13px] pr-[79px] xl:p-0">
            <h3 className="h3 xl:w-auto">Bandage</h3>
          </div>
        </div>

        <div className="icons display-flex-row w-1/2 gap-5 xl:w-auto">
          <img src="./svg/icons/SearchIcon.svg" alt="SearchIcon" />
          <img src="./svg/icons/ShopIcon.svg" alt="ShopIcon" />
          <button onClick={handleToggleChange}>
            <img src="./svg/icons/MenuIcon.svg" alt="MenuIcon" />
          </button>
        </div>

        <ul
          className={
            toggle === false
              ? "hidden"
              : "ul-display gap-8 pb-[5rem] xl:display-flex-row"
          }
        >
          {menu.map((item, index) => (
            <li key={index}>
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
