import FeaturePostsDesktop from "./FeaturePostsDesktop";
import FeaturePostsMobile from "./FeaturePostsMobile";

export default function FeaturePosts() {
  return (
    <>
      <div className="mobile-container w-full">
        <div className="main-content display-flex-column gap-2.5">
          <h6 className="h6">Practice Advice</h6>
          <h2 className="h2">Featured Posts</h2>
        </div>
        
        <div className="display-flex-column gap-7 md:desktop-display md:p-6 md:gap-2">

          <FeaturePostsMobile />
          <FeaturePostsDesktop />
        </div>
        <div className="social display-flex-column w-full gap-3 items-start px-11 py-10">
          <h3 className="h3">Bandage</h3>
          <div className="links display-flex-row gap-5 md:hidden">
            <img src="./svg/featurePost/facebook.svg" alt="facebook logo" />
            <img src="./svg/featurePost/instagram.svg" alt="instagram logo" />
            <img src="./svg/featurePost/twitter.svg" alt="twitter logo" />
          </div>
        </div>
      </div>
    </>
  );
}
