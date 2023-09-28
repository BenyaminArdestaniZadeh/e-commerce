import { selers } from "../../../data/selers";

export default function Items() {
  return (
    <>
      <div className="items-container w-full display-flex-column p-[1.5rem] gap-4 md:desktop-display md:justify-center md:w-full md:flex-wrap">
        {selers.map((item, index) => (
          <div className="items display-flex-column md:w-[30%%] lg:w-[24%] xl:w-[19%]" key={index}>
            <img src={item.url} alt={item.title} />
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
    </>
  );
}
