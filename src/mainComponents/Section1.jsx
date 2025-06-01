import Service from "./subComponents/Service.jsx";

const Section1 = () => {
  return (
    <>
      <div className="section1__wrapper">
        <div className="section1__description">
          <h1 className="section1__title">OUR SERVICES</h1>
          <p className="section1__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestiae aut quis porro, sit itaque!
          </p>
        </div>
        <div className="services">
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </>
  );
};

export default Section1;
