import { useEffect, useState } from "react";

const PhotoCircles = ({ length, index, section }) => {
  const [circlesArray, setCirclesArray] = useState([]);

  const mapCircles = (l, ti) => {
    const circles = [];
    for (let i = 0; i < l; i++) {
      circles[i] = <span key={i} className="circle"></span>;
      if (i === ti) {
        circles[i] = <span key={i} className="circle selected"></span>;
      }
    }
    setCirclesArray(circles);
  };

  useEffect(() => {
    if (length > 0 && (section === null || section === "T"))
      mapCircles(length, index);
    else if (section !== "T") {
      mapCircles(1, 0);
    }
  }, [length, index, section]);

  return (
    <>
      <div className="photoCircles__wrapper">{circlesArray}</div>
    </>
  );
};

export default PhotoCircles;
