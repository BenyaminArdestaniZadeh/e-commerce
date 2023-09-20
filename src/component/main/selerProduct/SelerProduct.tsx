export default function SelerProduct() {
  return (
    <>
      <div className="pt-[5rem]">
        <div className="display-flex-column gap-[0.62rem] w-[16.31rem] my-0 mx-auto">
          <h3 className="h3 w-[14.9rem] text-center">BESTSELLER PRODUCTS</h3>
          <p className="p text-nickel text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        {/*start items */}
        <div className="items-container display-flex-column p-[1.5rem] gap-4">
          {/* item-1 */}
          <div className="items display-flex-column">
            <img
              src="./img/selers/product-cover-1.png"
              alt="cover-1"
              className="img"
            />
            <div className="item-info display-flex-column gap-[0.62rem] p-[1.5rem] pb-[2.1rem]">
              <h5 className="h5 text-peacoat">Graphic Design</h5>
              <a href="#" className="btn-text text-nickel">
                English Department
              </a>
              <div className="display-flex-row gap-1.5">
                <h5 className="h5 text-mediumGray">$16.48</h5>
                <h5 className="h5 text-viridian">$6.48</h5>
              </div>
            </div>
          </div>
          {/* item-2 */}
          <div className="items display-flex-column">
            <img
              src="./img/selers/product-cover-2.png"
              alt="cover-1"
              className="img"
            />
            <div className="item-info display-flex-column gap-[0.62rem] p-[1.5rem] pb-[2.1rem]">
              <h5 className="h5 text-peacoat">Graphic Design</h5>
              <a href="#" className="btn-text text-nickel">
                English Department
              </a>
              <div className="display-flex-row gap-1.5">
                <h5 className="h5 text-mediumGray">$16.48</h5>
                <h5 className="h5 text-viridian">$6.48</h5>
              </div>
            </div>
          </div>
          {/* item-3 */}
          <div className="items display-flex-column">
            <img
              src="./img/selers/product-cover-3.png"
              alt="cover-1"
              className="img"
            />
            <div className="item-info display-flex-column gap-[0.62rem] p-[1.5rem] pb-[2.1rem]">
              <h5 className="h5 text-peacoat">Graphic Design</h5>
              <a href="#" className="btn-text text-nickel">
                English Department
              </a>
              <div className="display-flex-row gap-1.5">
                <h5 className="h5 text-mediumGray">$16.48</h5>
                <h5 className="h5 text-viridian">$6.48</h5>
              </div>
            </div>
          </div>
          {/* item-4 */}
          <div className="items display-flex-column">
            <img
              src="./img/selers/product-cover-4.png"
              alt="cover-1"
              className="img"
            />
            <div className="item-info display-flex-column gap-[0.62rem] p-[1.5rem] pb-[2.1rem]">
              <h5 className="h5 text-peacoat">Graphic Design</h5>
              <a href="#" className="btn-text text-nickel">
                English Department
              </a>
              <div className="display-flex-row gap-1.5">
                <h5 className="h5 text-mediumGray">$16.48</h5>
                <h5 className="h5 text-viridian">$6.48</h5>
              </div>
            </div>
          </div>
          {/* item-5 */}
          <div className="items display-flex-column">
            <img
              src="./img/selers/product-cover-5.png"
              alt="cover-1"
              className="img"
            />
            <div className="item-info display-flex-column gap-[0.62rem] p-[1.5rem] pb-[2.1rem]">
              <h5 className="h5 text-peacoat">Graphic Design</h5>
              <a href="#" className="btn-text text-nickel">
                English Department
              </a>
              <div className="display-flex-row gap-1.5">
                <h5 className="h5 text-mediumGray">$16.48</h5>
                <h5 className="h5 text-viridian">$6.48</h5>
              </div>
            </div>
          </div>
        </div>
        {/* end items */}

        <button className="btn btn-text mt-[2rem] mb-[5rem] mx-auto btn-border border-spanishSkyBlue text-spanishSkyBlue">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </>
  );
}
