import { selers } from "../../../data/selers";

export default function SelerProduct() {
  return (
    <>
      <div className="py-[5rem] px-[2.21rem]">
        <div className="display-flex-column gap-[0.62rem] w-[16.31rem] my-0 mx-auto">
          <h3 className="h3 w-[14.9rem] text-center">BESTSELLER PRODUCTS</h3>
          <p className="p text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="items-container display-flex-column p-[1.5rem] gap-4">
          {selers.map((item, index) => (
            <div className="items display-flex-column" key={index}>
              <img src={item.url} alt={item.title} className="img"/>
              <div className="item-info display-flex-column selers-item-info">
                <h5 className="h5 text-peacoat">{item.category}</h5>
                <a href="#" className="btn-text text-nickel">
                  {item.name}
                </a>
                <div className="display-flex-row gap-1.5">
                  <h5 className="h5 text-mediumGray">{item.discount}</h5>
                  <h5 className="h5 text-viridian">{item.price}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-text mt-[2rem] mb-[5rem] mx-auto btn-border border-spanishSkyBlue text-spanishSkyBlue">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </>
  );
}
