import { menu } from "../../../data/menu";
export default function NavbarDesktop() {
  return (
    <>
      <ul className="hidden md:display-flex-row md:gap-3">
        {menu.map((item, index) => (
          <li key={index}>
            <a href="#" className="h6 text-nickel">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
