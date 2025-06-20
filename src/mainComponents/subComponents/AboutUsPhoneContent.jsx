import FadeIn from "./FadeIn";
import ScrollGif from "./ScrollGif";

const AboutUsPhoneContent = ({ isHorizontal, paragraph, title, img, section, aboutUsContentImgRef }) => {
  return (
    <>
      <>
        <FadeIn>
          <div className="aboutUsContent__wrapper">
            <div className="aboutUsContent__left">
              <h2 className="aboutUsContent__left--title">{title}</h2>
              <span className="aboutUsContent__left--para">{paragraph}</span>
            </div>
            <div ref={aboutUsContentImgRef} className="aboutUsContent__right">
              <img
                src={img || undefined}
                alt="About Us Image"
                className={`aboutUsContent__right--img ${
                  isHorizontal ? "horizontal" : ""
                }`}
              />
              {section === "T" && <ScrollGif />}
            </div>
          </div>
        </FadeIn>
      </>
    </>
  );
};

export default AboutUsPhoneContent;
