import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faHandPointer,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import PhotoCircles from "./subComponents/PhotoCircles";
import { useEffect, useState } from "react";

const Header = ({
  headerImagesArray,
  nextImage,
  previousImage,
  headerBgRef,
  index,
  notImplemented,
}) => {
  const [length, setLength] = useState(0);

  const waitForHeaderImagesArray = () => {
    if (headerImagesArray.length > 0) {
      setLength(headerImagesArray.length);
    }
  };

  useEffect(() => {
    waitForHeaderImagesArray();
  }, [headerImagesArray]);


  return (
    <>
      <section id="header">
        <header>
          <div ref={headerBgRef} className="header__bg">
            <div
              className="header__arrow header__left"
              onClick={() => previousImage()}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="header__arrow--left"
              />
            </div>
            <div
              className="header__arrow header__right"
              onClick={() => nextImage()}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="header__arrow--right"
              />
            </div>
            {headerImagesArray}
            <div className="scrollGif__icons--header">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="scrollGif__icon phone"
              />
              <FontAwesomeIcon
                icon={faHandPointer}
                className="scrollGif__icon point"
              />
            </div>
          </div>
          <div className="header__bgfilter">
            <div
              className="header__arrow header__left"
              onClick={() => previousImage()}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="header__arrow--left"
              />
            </div>
            <div
              className="header__arrow header__right"
              onClick={() => nextImage()}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="header__arrow--right"
              />
            </div>
          </div>
          <div className="header__wrapper">
            <div className="header__content">
              <div className="header__content--subtitle">
                CVS IS YOUR <span className="turquoise">HEALTHCARE</span> TEAM
              </div>
              <div className="header__content--title">
                FOR YOUR DIALYSIS NEEDS
              </div>
              <div className="header__content--para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit tempore veniam animi in quos voluptas error incidunt
                soluta illo hic nam quae, expedita vitae. Ut autem debitis error
                recusandae suscipit.
              </div>
            </div>
            <div className="header__content--buttons">
              <button className="header__button--left header__button">
                VIEW OUR SERVICES
              </button>
              <button className="header__button--right header__button" onClick={() => notImplemented()}>
                LOREM IPSUM DOLOR SIT.
              </button>
            </div>
          </div>
          <PhotoCircles index={index} length={length} section={null} />
        </header>
      </section>
    </>
  );
};

export default Header;
