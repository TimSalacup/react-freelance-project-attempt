const SectionDescription = ({ title, description }) => {
  return (
    <>
      <div className="section__description">
        <h1 className="section__title">{title}</h1>
        <p className="section__para">
                  { description }
        </p>
      </div>
    </>
  );
};

export default SectionDescription;
