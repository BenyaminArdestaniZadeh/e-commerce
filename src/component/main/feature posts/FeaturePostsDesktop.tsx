import { featurePostsDesktop } from "../../../data/featurePost";
import NewTag from "./NewTag";

export default function FeaturePostsDesktop() {
  return (
    <>
      {featurePostsDesktop.map((item, index) => (
        <div
          className="hidden md:display-flex-column md:justify-start  md:items-center md:gap-3 md:p-3 lg:desktop-display lg:items-start lg:justify-center"
          key={index}
        >
          <div className="container md:desktop-display relative">
            <img
              src={item.url}
              alt={item.imgSrc}
              className="img w-full h-full"
            />
            <div className="desktop-display gap-3 absolute bottom-6 left-1/2 translate-x-[-50%]">
              <button className="p-3 bg-white rounded-full">
                <img src={item.likeLogoUrl} alt={item.likeLogoAlt} />
              </button>
              <button className="p-3 bg-white rounded-full">
                <img src={item.shopLogoUrl} alt={item.shopLogoAlt} />
              </button>
              <button className="p-3 bg-white rounded-full">
                <img src={item.viewLogoUrl} alt={item.viewLogoAlt} />
              </button>
            </div>
            <NewTag />
          </div>

          <div className="pl-2 display-flex-column justify-start items-start gap-5 md:gap-4 lg:gap-3 xl:gap-6">
            <div className="desktop-display w-full xl:py-4">
              <a href="#" className="h6 text-spanishSkyBlue xl:text-[17px]">
                {item.titleLink}
              </a>
              <span className="desktop-display gap-[6px] p-[6px] rounded-full bg-peacoat xl:py-3 xl:px-6">
                <img
                  src={item.starLogo}
                  alt={item.starAlt}
                  className="xl:w-6 xl:h-6"
                />
                <small className="small text-white xl:text-[20px]">
                  {item.starText}
                </small>
              </span>
            </div>

            <h5 className="h5 text-peacoat xl:text-[17px] xl:pb-4">
              {item.title}
            </h5>
            <p className="p xl:text-[16px] xl:pb-4">{item.text}</p>

            <div className="feature-frame-desktop xl:pb-4">
              <img
                src={item.frameLogoUrl}
                alt={item.frameLogoAlt}
                className="xl:w-6 xl:h-6"
              />
              <h6 className="h6 text-nickel xl:text-[17px]">{item.sale}</h6>
            </div>

            <div className="feature-frame-desktop xl:pb-4">
              <h5 className="h5 text-mediumGray xl:text-[17px]">
                {item.discaountPrice}
              </h5>
              <h5 className="h5 text-viridian xl:text-[17px]">{item.price}</h5>
            </div>

            <div className="feature-frame-desktop xl:pb-4">
              <img
                src={item.blue}
                alt={item.blueAlt}
                className="xl:w-6 xl:h-6"
              />
              <img
                src={item.green}
                alt={item.greenAlt}
                className="xl:w-6 xl:h-6"
              />
              <img
                src={item.orange}
                alt={item.orangeAlt}
                className="xl:w-6 xl:h-6"
              />
              <img
                src={item.ellipse}
                alt={item.ellipseAlt}
                className="xl:w-6 xl:h-6"
              />
            </div>
            <div className="desktop-display justify-start gap-2 w-[95%] xl:pb-4">
              <div className="feature-frame-desktop gap-1">
                <img
                  src={item.timeLogo}
                  alt={item.timeAlt}
                  className="xl:w-6 xl:h-6"
                />
                <small className="small xl:text-[17px]">{item.timeText}</small>
              </div>
              <div className="feature-frame-desktop gap-1">
                <img src={item.areaLogo} alt={item.areaAlt} className="xl:w-6 xl:h-6"/>
                <small className="small xl:text-[17px]">{item.areaText}</small>
              </div>
              <div className="feature-frame-desktop gap-1">
                <img src={item.chartLogo} alt={item.chartAlt} className="xl:w-6 xl:h-6"/>
                <small className="small xl:text-[17px]">{item.chartText}</small>
              </div>
            </div>
            <button className=" desktop-btn xl:px-6 xl:py-3">
              <h6 className="xl:text-[17px]">{item.btnText}</h6>
              <h6 className="xl:text-[17px]">{item.btnSimbol}</h6>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
