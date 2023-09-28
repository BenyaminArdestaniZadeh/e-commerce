export default function FeaturedProducts() {
  return (
    <>
      <div className="mobile-container gap-3 px-[1.28rem] md:px-10 md:py-5 md:flex-row-reverse md:justify-center md:items-center lg:items-start">
        <div className="title display-flex-column px-5 min-w-[17.5rem] gap-4 items-start md:w-1/2">
          <h5 className="h5">Featured Products</h5>
          <h2 className="h2">We love what we do</h2>
          <p className="p">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics Problems trying to resolve
            the conflict between the two major realms of Classical physics:
            Newtonian mechanics <br />
            <br />
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics Problems trying to resolve
            the conflict between the two major realms of Classical physics:
            Newtonian mechanics
          </p>
        </div>

        <div className="img-container display-flex-row justify-center min-w-[329px] gap-[7px] mb-[5rem] md:min-w-[408px] md:w-1/2 md:mb-0">
          <img src="./img/feature/feature-1.png" alt="feature-1" className="img w-[38vw] h-[87.6vw] md:w-[15vw] md:h-[34vw]" />
          <img src="./img/feature/feature-2.png" alt="feature-2" className="img w-[49vw] h-[87.6vw] md:w-[19vw] md:h-[34vw]" />
        </div>
      </div>
    </>
  );
}
