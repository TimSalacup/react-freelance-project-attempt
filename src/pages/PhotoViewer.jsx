import { Link } from "react-router-dom";

const PhotoViewer = () => {
  return (
    <>
      <div className="photoViewer">
          <Link to="/" className="photoViewer__close">back to main</Link>
        <div className="photoViewer__img--container">
          <img src="/photoViewerPhotos/asset7.jpg" alt="something" className="photoViewer__img" />
        </div>
        <div className="photoViewer__previews"></div>
      </div>
    </>
  );
};

export default PhotoViewer;
