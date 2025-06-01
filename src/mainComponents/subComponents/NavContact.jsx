const NavContact = ({ icon, text, topText, right }) => {
  return (
    <>
      <div className="nav__contact">
        {icon}
        <div className="nav__contact--textContainer">
          <span className="nav__contact--text top">{topText}</span>
          <span className={`nav__contact--text bottom ${right}`}>{text}</span>
        </div>
      </div>
    </>
  );
};

export default NavContact;
