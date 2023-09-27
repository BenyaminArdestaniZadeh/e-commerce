import { bestServices } from "../../../data/bestServices";

export default function BestServices() {
  return (
    <>
      <div className="mobile-container">
        <div className="main-content display-flex-column gap-[0.62rem]">
          <h4 className="h4">Featured Products</h4>
          <h3 className="h3">THE BEST SERVICES</h3>
          <p className="p max-w-[12.25rem] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="cards-container display-flex-column gap-[1rem] md:w-[90%] md:flex-row md:justify-between">
          {bestServices.map((item, index) => (
            <div className="card service-card" key={index}>
              <img src={item.url} alt={item.title} className="img" />
              <h3 className="h3">{item.topic}</h3>
              <p className="p max-w-[14.06rem] text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
