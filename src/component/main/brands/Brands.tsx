import { brands } from "../../../data/brands";

export default function Brands() {
  return (
    <>
      <div className="mobile-container py-[6.87rem] md:p-10 max-w-full">
        <section className="w-[73%] display-flex-column gap-10 md:gap-0 xl:py-[3.12rem] md:py-10 md:px-0 px-10 md:min-w-[60%] md:max-w-[80%] md:flex-row md:justify-between">
          {brands.map((item) => (
            <img
              src={item.url}
              alt={item.title}
              className="max-w-[153px] md:max-w-[60px] lg:max-w-[70px]  xl:w-[103px]  h-auto"
            />
          ))}
        </section>
      </div>
    </>
  );
}
