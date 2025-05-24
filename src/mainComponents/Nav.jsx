import NavLogo from "../assets/cvsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NavContact from "./subComponents/NavContact";
import NavBottomLink from "./subComponents/NavBottomLink";

const Nav = () => {
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhone} className="nav__top--icon" />
  );
  const envelopeIcon = (
    <FontAwesomeIcon icon={faEnvelope} className="nav__top--icon" />
  );
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="nav__top">
            <img src={NavLogo} alt="cvs logo" className="nav__top--logo" />
            <div className="nav__top--right">
              <NavContact icon={phoneIcon} text="(+63) 917 703 5047" />
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
              />
            </div>
          </div>
        </div>
        <div className="nav__bottom">
          <div className="nav__bottom--wrapper">
            <div className="nav__bottom--links">
              <NavBottomLink text="About us" />
              <NavBottomLink text="Our Services" leftLine="leftLine"/>
              <NavBottomLink text="Sample link" leftLine="leftLine"/>
              <NavBottomLink text="Sample link 2" leftLine="leftLine"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
