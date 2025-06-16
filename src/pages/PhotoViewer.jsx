import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PhotoViewer = ({ onPhotoViewerClose, photoViewerPreviews, photoViewerImg }) => {
  return (
    <>
      <div className="photoViewer">
        <Link to="/#aboutUs" onClick={() => onPhotoViewerClose()}><FontAwesomeIcon icon={faXmark} className="photoViewer__close" /></Link>
        <div className="photoViewer__img--container">
          <img src={photoViewerImg} alt="something" className="photoViewer__img" />
        </div>
        <div className="photoViewer__previews">
          {photoViewerPreviews}
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
