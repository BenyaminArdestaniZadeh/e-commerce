import { brands } from "../../../data/brands";
export default function Brands() {
  return (
    <>
      <div className="mobile-container py-[6.87rem]">
        <section className="display-flex-column gap-[3.75rem] py-[3.12rem]">
          {brands.map((item) => (
            <img src={item.url} alt={item.title} />
          ))}
        </section>
      </div>
    </>
  );
}
