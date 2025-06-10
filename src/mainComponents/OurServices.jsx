import Service from "./subComponents/Service.jsx";
import SectionDescription from "./subComponents/SectionDescription.jsx";

const OurServices = () => {
  return (
    <>
      <div className="section__wrapper" id="services">
        <SectionDescription
          title="OUR SERVICES"
          description="What we do to help kidney patients live a better life:"
        />
        <div className="services">
          <Service />
          <Service />
          <Service />
        </div>
      </div>
    </>
  );
};

export default OurServices;
