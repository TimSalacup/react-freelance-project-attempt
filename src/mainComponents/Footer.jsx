import cvsLogo from "../assets/cvsLogo.png"

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper moveDown">
        <div className="wrapper footer">
          <div className="footer__bg"></div>
          <ul className="footer__links--list">  
            <li className="footer__link">
              <a href="" className="footer__link--href">
                Message us on Facebook Messenger
              </a>
            </li>
            <li className="footer__link">
              <a href="" className="footer__link--href">
                About us
              </a>
            </li>
            <li className="footer__link">
              <a href="" className="footer__link--href">
                Our Services
              </a>
            </li>
            <li className="footer__link">
              <a href="" className="footer__link--href">
                Back to top
              </a>
            </li>
          </ul>
              </div>
              <div className="footer__right">
                  <img src={cvsLogo} alt="CVS Logo" className="footer__img" />
                  <i className="footer__quote">"Where care meets value for service"</i>
              </div>
      </div>
    </>
  );
};

export default Footer;
