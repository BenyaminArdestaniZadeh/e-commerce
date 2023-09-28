import { featurePostsDesktop } from "../../../data/featurePost";

export default function FeaturePostsDesktop() {
  return (
    <>
      {featurePostsDesktop.map((item, index) => (
        <div
          className="md:display-flex-row md:justify-start md:p-3 "
          key={index}
        >
          <div className="container w-1/2">
            <img src={item.url} alt={item.imgSrc} className="img w-full" />
          </div>

          <div className="w-1/2 p-3 display-flex-column justify-start items-start gap-3">
            <a href="#" className="h6 text-spanishSkyBlue">
              {item.titleLink}
            </a>
            <h5 className="h5 text-peacoat">{item.title}</h5>
            <p className="p">{item.text}</p>

            <div className="feature-frame-desktop">
              <img src={item.frameLogoUrl} alt={item.frameLogoAlt} />
              <h6 className="h6 text-nickel">{item.sale}</h6>
            </div>

            <div className="feature-frame-desktop">
              <h5 className="h5 text-mediumGray">{item.discaountPrice}</h5>
              <h5 className="h5 text-viridian">{item.price}</h5>
            </div>

            <div className="feature-frame-desktop">
              <img src={item.blue} alt={item.blueAlt} />
              <img src={item.green} alt={item.greenAlt} />
              <img src={item.orange} alt={item.orangeAlt} />
              <img src={item.ellipse} alt={item.ellipseAlt} />
            </div>
            <div className="flex-row justify-center w-full">
              <div className="feature-frame-desktop gap-1">
                <img src={item.timeLogo} alt={item.timeAlt} />
                <small className="small ">{item.timeText}</small>
              </div>
              <div className="feature-frame-desktop gap-1">
                <img src={item.areaLogo} alt={item.areaAlt} />
                <small className="small ">{item.areaText}</small>
              </div>
              <div className="feature-frame-desktop gap-1">
                <img src={item.chartLogo} alt={item.chartAlt} />
                <small className="small ">{item.chartText}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
