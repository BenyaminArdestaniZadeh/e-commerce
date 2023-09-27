import Items from "./Items";

export default function SelerProduct() {
  return (
    <>
      <div className="w-full py-[5rem] px-[1rem]">
        <div className="display-flex-column gap-[0.62rem] w-[16.31rem] my-0 mx-auto">
          <h3 className="h3 w-[14.9rem] text-center">BESTSELLER PRODUCTS</h3>
          <p className="p text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <Items />
        <Items />
        <button className="btn btn-text mt-[2rem] mb-[5rem] mx-auto btn-border border-spanishSkyBlue text-spanishSkyBlue">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </>
  );
}
