import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper moveDown" id="footer">
        <div className="wrapper footer">
          <div className="footer__bg"></div>
          <ul className="footer__links--list">
            <li className="footer__link">
              <a
                href="https://m.me/cvsph.sjdm"
                target="_blank"
                className="footer__link--href"
              >
                Facebook Messenger
              </a>
            </li>
            <li className="footer__link">
              <Link to="/#aboutUs" className="footer__link--href">
                About us
              </Link>
            </li>
            <li className="footer__link">
              <Link to="/#services" className="footer__link--href">
                Our Services
              </Link>
            </li>
            <li className="footer__link">
              <Link to="/" className="footer__link--href">
                Back to top
              </Link>
            </li>
          </ul>
          <ul className="footer__links--list">
            <li className="footer__link">
              <a
                href="https://www.facebook.com/cvsph.sjdm"
                target="_blank"
                className="footer__link--href"
              >
                Visit our Facebook Page
              </a>
            </li>
            
          </ul>
        </div>
        <div className="footer__right">
          <img src="/publicAssets/cvsLogo.png" alt="CVS Logo" className="footer__img" />
          <i className="footer__quote">"Where care meets value for service"</i>
        </div>
      </div>
    </>
  );
};

export default Footer;
