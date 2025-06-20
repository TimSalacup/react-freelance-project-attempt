import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollGif = () => {
  return (
    <>
      <FontAwesomeIcon
        icon={faMobileScreenButton}
        className="scrollGif__icon phone"
      />
      <FontAwesomeIcon icon={faHandPointer} className="scrollGif__icon point" />
    </>
  );
};

export default ScrollGif;
