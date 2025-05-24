const NavBottomLink = ({ text, leftLine }) => {
  return (
    <>
      <div className={leftLine}></div>
      <a href="" className="nav__bottom--link">
        {text}
      </a>
    </>
  );
};

export default NavBottomLink;
