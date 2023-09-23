import { featurePosts } from "../../../data/featurePost";

export default function FeaturePosts() {
  return (
    <>
      <div className="mobile-container">
        <div className="main-content display-flex-column gap-2.5">
          <h6 className="h6">Practice Advice</h6>
          <h2 className="h2">Featured Posts</h2>
        </div>
        {/* item-1 */}
        {featurePosts.map((item, index) => (
          <div className="content-cart display-flex-column" key={index}>
            <img src={item.url} alt={item.title} className="img" />
            <div className="feature-posts-frame items-start px-11">
              <div className="display-flex-row gap-4">
                <small className="small text-spanishSkyBlue">
                  {item.google}
                </small>
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
        <div className="social display-flex-column w-full gap-3 items-start px-11 py-10">
          <h3 className="h3">Bandage</h3>
          <div className="links display-flex-row gap-5">
            <img src="./svg/featurePost/facebook.svg" alt="facebook logo" />
            <img src="./svg/featurePost/instagram.svg" alt="instagram logo" />
            <img src="./svg/featurePost/twitter.svg" alt="twitter logo" />
          </div>
        </div>
      </div>
    </>
  );
}
