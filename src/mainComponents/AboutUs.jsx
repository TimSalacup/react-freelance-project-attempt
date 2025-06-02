import AboutUsContent from "./subComponents/AboutUsContent";

const AboutUs = ({ aboutUsSections, aboutTitle, aboutPara, aboutImg, aboutImgRef }) => {
  return (
    <>
      <div className="section__wrapper aboutUs">
        <div className="aboutUs__bg">
          <img
            src="/publicAssets/cvsLogo.png"
            alt=""
            className="aboutUs__bg--img"
          />
        </div>
        <div className="aboutUs__bgfilter"></div>
        <h1 className="section__title aboutUs">ABOUT US</h1>
              <div className="aboutUs__sections">
                  <div className="aboutUs__sections--bg"></div>
                  {aboutUsSections}
              </div>
              <AboutUsContent aboutTitle={aboutTitle} aboutPara={aboutPara} aboutImg={aboutImg} />
      </div>
    </>
  );
};

export default AboutUs;
