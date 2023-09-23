export default function FeaturedProducts() {
  return (
    <>
      <div className="mobile-container gap-[3.12rem] px-[1.28rem]">
        <div className="title display-flex-column w-[17.5rem] gap-4 items-start">
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

        <div className="img-container display-flex-row justify-start gap-[7px] mb-[5rem]">
          <img src="./img/feature/feature-1.png" alt="feature-1" className="img w-[7.4rem]"/>
          <img src="./img/feature/feature-2.png" alt="feature-2" className="img w-[9.52rem]"/>
        </div>
      </div>
    </>
  );
}
