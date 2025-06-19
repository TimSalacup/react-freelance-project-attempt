import FadeIn from "./FadeIn";

const AboutUsPhoneContent = ({ isHorizontal, paragraph, title, img }) => {
  return (
    <>
      <>
        <FadeIn>
          <div className="aboutUsContent__wrapper">
            <div className="aboutUsContent__left">
              <h2 className="aboutUsContent__left--title">{title}</h2>
              <span className="aboutUsContent__left--para">{paragraph}</span>
            </div>
            <div className="aboutUsContent__right">
              <img
                src={img || undefined}
                alt="About Us Image"
                className={`aboutUsContent__right--img ${
                  isHorizontal ? "horizontal" : ""
                }`}
              />
            </div>
          </div>
        </FadeIn>
      </>
    </>
  );
};

export default AboutUsPhoneContent;
