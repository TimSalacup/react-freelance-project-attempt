const NavBottomLink = ({
  text,
  toggleActive,
  navBottomLinkContainerRef,
}) => {
  return (
    <>
      <div
        className="nav__bottom--link--container"
        onClick={(e) => {
          e.preventDefault();
          toggleActive();
        }}
        ref={navBottomLinkContainerRef}
      >
        <a href="#" className="nav__bottom--link">
          {text}
        </a>
      </div>
    </>
  );
};

export default NavBottomLink;
