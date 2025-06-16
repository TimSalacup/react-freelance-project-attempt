import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({headerImagesArray, nextImage, previousImage}) => {
  return (
    <>
      <section id="header">
        <header>
          <div className="header__arrow header__left" onClick={() => previousImage()}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="header__arrow--left"
            />
          </div>
          <div className="header__arrow header__right" onClick={() => nextImage()}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="header__arrow--right"
            />
          </div>
          <div className="header__bg">
            {headerImagesArray}
          </div>
          <div className="header__bgfilter"></div>
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
                <button className="header__button--right header__button">
                  LOREM IPSUM DOLOR SIT.
                </button>
              </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
