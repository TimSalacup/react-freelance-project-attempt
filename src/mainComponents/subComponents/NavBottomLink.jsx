const NavBottomLink = ({
  text,
  toggleActive,
  navBottomLinkContainerRef,
  link,
}) => {
  return (
    <>
      <div
        className="nav__bottom--link--container"
        onClick={() => {
          toggleActive();
          window.location.hash = link;
        }}
        ref={navBottomLinkContainerRef}
      >
        <a href={`#${link}`} className="nav__bottom--link">
          {text}
        </a>
      </div>
    </>
  );
};

export default NavBottomLink;
