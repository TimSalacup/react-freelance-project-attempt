import {
  faChevronLeft,
  faChevronRight,
  faHandPointer,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import FadeIn from "./FadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUsPhoneContent = ({
  isHorizontal,
  paragraph,
  title,
  img,
  section,
  aboutUsContentImgRef,
  previousTrainedImg,
  nextTrainedImg,
}) => {
  return (
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
            {section === "T" && (
              <div
                className="header__arrow header__left"
                onClick={() => previousTrainedImg()}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="header__arrow--left about"
                />
              </div>
            )}
            {section === "T" && (
              <div
                className="header__arrow header__right"
                onClick={() => nextTrainedImg()}
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="header__arrow--right about"
                />
              </div>
            )}
            {section === "T" && (
              <div className="scrollGif__icons--about">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="scrollGif__icon phone"
                />
                <FontAwesomeIcon
                  icon={faHandPointer}
                  className="scrollGif__icon point"
                />
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default AboutUsPhoneContent;
