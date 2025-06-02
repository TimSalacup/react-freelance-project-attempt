import Service from "./subComponents/Service.jsx";
import SectionDescription from "./subComponents/SectionDescription.jsx";

const OurServices = () => {
  return (
    <>
      <div className="section__wrapper">
        <SectionDescription
          title="OUR SERVICES"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          molestiae aut quis porro, sit itaque!"
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
