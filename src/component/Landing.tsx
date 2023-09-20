import CollapseNavbar from "./header/CollapseNavbar";
import Menu from "./header/Menu";

export default function Landing() {
  return (
    <>
      <div className="body">
        <header className="display-flex-column ">
          <div className="navbar-style w-full display-flex-column h-[33.25rem]">
            <CollapseNavbar />
            <Menu />
          </div>
          <div className="row w-[24.25rem] h-[56.5rem] bg-spanishSkyBlue display-flex-column shrink-0">
            <div className="content display-flex-column gap-8 h-[23.37rem] mt-[5rem]">
              <h5>SUMMER 2020</h5>
              <h2>NEW COLLECTION</h2>
              <h4>
                We know how large objects will act, but things on a small scale.
              </h4>
            </div>
            <div className="hero"></div>
          </div>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
