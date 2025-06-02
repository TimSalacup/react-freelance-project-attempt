const AboutUsContent = ({aboutTitle, aboutPara, aboutImg}) => {
  return (
    <>
      <div className="aboutUsContent__wrapper">
        <div className="aboutUsContent__left">
          <h2 className="aboutUsContent__left--title">
            {aboutTitle}
          </h2>
          <span className="aboutUsContent__left--para">
            {aboutPara}
          </span>
        </div>
        <div className="aboutUsContent__right">
          <img
            src={aboutImg || undefined}
            alt=""
            className="aboutUsContent__right--img"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
