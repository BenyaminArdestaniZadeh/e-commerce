export default function CollapseNavbar() {
  return (
    <>
      <nav className="w-full display-flex-row bg-hoverTextColor h-20">
        <div className="logo w-1/2">
          <div className="navbar-brand py-[13px] pr-[79px]">
            <h3 className="h3 text-peacoat">Bandage</h3>
          </div>
        </div>
        <div className="icons display-flex-row w-1/2 gap-5">
          <img src="./svg/icons/SearchIcon.svg" alt="SearchIcon" />
          <img src="./svg/icons/ShopIcon.svg" alt="ShopIcon" />
          <img src="./svg/icons/MenuIcon.svg" alt="MenuIcon" />
        </div>
      </nav>
    </>
  );
}
