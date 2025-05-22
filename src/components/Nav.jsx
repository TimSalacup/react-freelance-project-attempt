import NavLogo from "../assets/cvsLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhone} className="nav__top--phoneIcon" />
  );
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="nav__top">
            <img src={NavLogo} alt="cvs logo" className="nav__top--logo" />
            <div className="nav__top--right">
              {phoneIcon}
              <span className="nav__top--number">0917 703 5047</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
