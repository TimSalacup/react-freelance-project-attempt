import AboutUsContent from "./subComponents/AboutUsContent";
import FadeIn from "./subComponents/FadeIn";

const AboutUs = ({
  aboutUsSections,
  aboutTitle,
  aboutPara,
  aboutImg,
  isHorizontal,
  aboutSection,
  nextTrainedImg,
  previousTrainedImg,
}) => {
  return (
    <>
      <div className="section__wrapper aboutUs" id="aboutUs">
        <div className="aboutUs__bg">
          <img
            src="/publicAssets/cvsLogo.png"
            alt=""
            className="aboutUs__bg--img"
          />
        </div>
        <div className="aboutUs__bgfilter"></div>
        <FadeIn>
          <h1 className="section__title aboutUs">ABOUT US</h1>
        </FadeIn>
        <FadeIn>
          <div className="aboutUs__sections">
            <div className="aboutUs__sections--bg"></div>
            <div className="aboutUs__sections--links">{aboutUsSections}</div>
          </div>
        </FadeIn>
        <FadeIn>
          <AboutUsContent
            aboutTitle={aboutTitle}
            aboutPara={aboutPara}
            aboutImg={aboutImg}
            isHorizontal={isHorizontal}
            section={aboutSection}
            nextTrainedImg={nextTrainedImg}
            previousTrainedImg={previousTrainedImg}
          />
        </FadeIn>
      </div>
    </>
  );
};

export default AboutUs;
