import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faArrowUp,
  faArrowDown,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavContact from "./subComponents/NavContact";

const Nav = ({
  toggleBottomNav,
  bottomNavRef,
  openBottomNavRef,
  navBottomLinksRef,
  bottomNavComponents,
  menuButtonRef,
  toggleMenu,
  closeMenuButtonRef,
  menuRef,
}) => {
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhone} className="nav__top--icon" />
  );
  const envelopeIcon = (
    <FontAwesomeIcon icon={faEnvelope} className="nav__top--icon" />
  );

  return (
    <>
      <nav>
        <div className="nav__top">
          <div className="nav__top--wrapper">
            <img
              src="/publicAssets/cvsLogo.png"
              alt="cvs logo"
              className="nav__top--logo"
            />
            <div className="nav__top--right">
              <NavContact
                icon={phoneIcon}
                text="(+63) 917 703 5047"
                topText="Call us!"
                right=""
              />
              <div className="nav__top--splitter"></div>
              <NavContact
                icon={envelopeIcon}
                text={
                  <a
                    href="https://m.me/cvsph.sjdm"
                    target="_blank"
                    className="nav__link"
                  >
                    https://m.me/cvsph.sjdm
                  </a>
                }
                topText="Message us!"
                right="right"
              />
              <FontAwesomeIcon
                ref={menuButtonRef}
                icon={faBarsStaggered}
                className="nav__top--menu"
                onClick={() => toggleMenu()}
              />
              <FontAwesomeIcon
                ref={closeMenuButtonRef}
                icon={faXmark}
                className="nav__top--closeMenu invisible"
                onClick={() => toggleMenu()}
              />
            </div>
          </div>
        </div>
        <div ref={menuRef} className="menu">
          <ul className="menu__links--list">
            <li className="menu__link">
              <span className="menu__link--href">Message us</span>
            </li>
            <li className="menu__link">
              <span className="menu__link--href">
                Link 2
              </span>
            </li>
            <li className="menu__link">
              <span className="menu__link--href">Link 3 </span>
            </li>
            <li className="menu__link">
              <span className="menu__link--href">Link 4</span>
            </li>
          </ul>
        </div>
        <div className="nav__bottom" ref={bottomNavRef}>
          <div className="nav__bottom--wrapper">
            <div className="nav__bottom--links" ref={navBottomLinksRef}>
              {bottomNavComponents}
            </div>
            <FontAwesomeIcon
              icon={faArrowUp}
              className="nav__bottom--arrow"
              onClick={() => toggleBottomNav()}
            />
          </div>
        </div>
        <div className="wrapper relative">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="nav__bottom--arrow showNavBottom"
            onClick={() => toggleBottomNav()}
            ref={openBottomNavRef}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
