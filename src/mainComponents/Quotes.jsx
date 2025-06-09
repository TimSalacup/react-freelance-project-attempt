import FadeIn from "./subComponents/FadeIn";

const Quotes = () => {
  return (
    <>
      <div className="quotes__wrapper">
        <div className="quotes__bg">
          <img
            src="/publicAssets/asset12.jpg"
            alt=""
            className="quotes__bg--img"
          />
        </div>
        <div className="quotes wrapper">
          <FadeIn>
            <span className="quotes__quote">
              TAWAG NA FOR YOUR{" "}
              <span className="turquoise">DIALYSIS NEEDS</span>.
            </span>
          </FadeIn>
          <FadeIn>
            <span className="quotes__quote bottom">
              SERBISYONG <span className="turquoise">WALANG MINTIS</span>,
              MATATAGPUAN SA CVS.
            </span>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Quotes;
