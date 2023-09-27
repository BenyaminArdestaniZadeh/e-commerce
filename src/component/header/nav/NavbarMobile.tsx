import { menu } from "../../../data/menu";

export default function NavbarMobile({ toggle }: any) {
  return (
    <>
      <ul className={toggle ? "hidden" : "ul-display gap-8 pb-20 md:hidden"}>
        {menu.map((item, index) => (
          <li key={index}>
            <a href="#">{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

// toggle === false
// ? "hidden"
// : "ul-display gap-8 pb-[5rem] xl:display-flex-row"
