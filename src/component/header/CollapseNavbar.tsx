export default function CollapseNavbar() {
  return (
    <>
      <nav className="w-full display-flex-row bg-hoverTextColor h-20 border-2 border-solid border-black">
        <div className="logo w-1/2">
          <div className="navbar-brand py-[13px] pr-[79px]">
            <h3 className="text-[1.5rem] font-bold leading-[2rem] tracking-[0.1px]">Bandage</h3>
          </div>
        </div>
        <div className="icons display-flex-row w-1/2 gap-5">
          <img src="./SearchIcon.svg" alt="SearchIcon" />
          <img src="./ShopIcon.svg" alt="ShopIcon" />
          <img src="MenuIcon.svg" alt="MenuIcon" />
        </div>
      </nav>
    </>
  );
}
