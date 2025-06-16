import {
  faCaretLeft,
  faCaretRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutUsContent = ({
  aboutTitle,
  aboutPara,
  aboutImg,
  isHorizontal,
  section,
  nextTrainedImg,
  previousTrainedImg,
  mapPhotoViewerPreviews,
}) => {
  return (
    <>
      <div className="aboutUsContent__wrapper">
        <div className="aboutUsContent__left">
          <h2 className="aboutUsContent__left--title">{aboutTitle}</h2>
          <span className="aboutUsContent__left--para">{aboutPara}</span>
        </div>
        <Link
          to="/photoViewer"
          className="aboutUsContent__right"
          onClick={() => mapPhotoViewerPreviews()}
        >
          <img
            src={aboutImg || undefined}
            alt=""
            className={`aboutUsContent__right--img ${
              isHorizontal ? "horizontal" : ""
            }`}
          />
          <FontAwesomeIcon icon={faEye} className="aboutUsContent__eye" />
        </Link>
        <div className="aboutUsContent__arrows">
          <FontAwesomeIcon
            icon={faCaretLeft}
            className={`aboutUsContent__arrow ${
              section === "T" ? "visible" : ""
            }`}
            onClick={() => previousTrainedImg()}
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            className={`aboutUsContent__arrow ${
              section === "T" ? "visible" : ""
            }`}
            onClick={() => nextTrainedImg()}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
