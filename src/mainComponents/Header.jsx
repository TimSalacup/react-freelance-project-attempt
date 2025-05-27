import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import headerImg from "../assets/asset3.jpg";

const Header = () => {
  return (
    <>
      <section>
        <header>
          <div className="header__arrow header__left">
            <div className="fader__left"></div>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="header__arrow--left"
            />
          </div>
          <div className="header__arrow header__right">
            <div className="fader__right"></div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="header__arrow--right"
            />
          </div>
          <div className="header__bg">
            <img src={headerImg} alt="" className="header__bg--img" />
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
              <div className="header__content--buttons">
                <button className="header__button--left header__button">
                  VIEW OUR SERVICES
                </button>
                <button className="header__button--right header__button">
                  LOREM IPSUM DOLOR SIT.
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
