import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PhotoViewer = ({
  onPhotoViewerClose,
  photoViewerPreviews,
  photoViewerImg,
  previousPhotoViewerImage,
  nextPhotoViewerImage,
}) => {
  return (
    <>
      <div className="photoViewer">
        <Link to="/#aboutUs" onClick={() => onPhotoViewerClose()}>
          <FontAwesomeIcon icon={faXmark} className="photoViewer__close" />
        </Link>
        <div className="photoViewer__img--container">
          <img
            src={photoViewerImg}
            alt="something"
            className="photoViewer__img"
          />
        </div>
        <div className="photoViewer__previews">{photoViewerPreviews}</div>
        <div
          className="header__arrow header__left"
          onClick={() => previousPhotoViewerImage()}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="photoViewer__arrow--left"
          />
        </div>
        <div
          className="header__arrow header__right"
          onClick={() => nextPhotoViewerImage()}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="photoViewer__arrow--right"
          />
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
