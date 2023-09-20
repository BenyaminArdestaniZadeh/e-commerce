export default function Menu() {
  return (
    <>
      <nav className="border-2 border-solid border-black mt-[5rem]">
        <ul className="display-flex-column gap-[1.87rem] text-[1.87rem] font-normal leading-[2.8rem] tracking-[0.2px] text-nickel">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
