import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import CollapseNavbar from "../component/header/nav/CollapseNavbar";
import SubHeader from "../component/header/sub header/SubHeader";
import { Suspense } from "react";

export default function LandingPageLayout() {
  return (
    <>
      <div className="min-w-[320px] sm:min-w-sm md:min-w-md lg:min-w-lg xl:min-w-xl">
        <header className="display-flex-row flex-wrap w-full">
          <SubHeader />
          <CollapseNavbar />
        </header>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
