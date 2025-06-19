import FadeIn from "./subComponents/FadeIn";

const AboutUsPhone = ({ aboutUsPhoneContentContainer }) => {
  return (
    <>
      <div className="section__wrapper aboutUs phone" id="aboutUs">
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
        {aboutUsPhoneContentContainer}
      </div>
    </>
  );
};

export default AboutUsPhone;
