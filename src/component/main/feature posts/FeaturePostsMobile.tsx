import { featurePostsMobile } from "../../../data/featurePost";

export default function FeaturePostsMobile() {
  return (
    <>
      {featurePostsMobile.map((item, index) => (
        <div className="content-cart display-flex-column md:hidden" key={index}>
          <img src={item.url} alt={item.title} className="img" />
          <div className="feature-posts-frame ">
            <div className="display-flex-row gap-4">
              <small className="small text-spanishSkyBlue">{item.google}</small>
              <small className="small">{item.trending}</small>
              <small className="small">{item.new}</small>
            </div>

            <h4 className="h4 text-peacoat">{item.topic}</h4>
            <p className="p">{item.text}</p>
            <div className="w-full display-flex-row justify-between py-4">
              <div className="feature-posts-frame-small">
                <img src={item.timeLogo} alt={item.timeSrc} />
                <small className="small">{item.timeText}</small>
              </div>
              <div className="feature-posts-frame-small">
                <img src={item.commentLogo} alt={item.commentSrc} />
                <small className="small">{item.commentText}</small>
              </div>
            </div>

            <a href="#" className="display-flex-row gap-2.5">
              <h6 className="h6 text-nickel">{item.buttonText}</h6>
              <img src={item.buttonLogo} alt={item.buttonLogoSrc} />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
