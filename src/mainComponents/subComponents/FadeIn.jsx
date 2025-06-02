import { useEffect, useRef } from "react";

const FadeIn = ({ children }) => {
  const ref = useRef();

  // LOADS THE FADER IN
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("fadeIn");
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);
  return (
    <>
      <div ref={ref} className="fadeInDiv">
        {children}
      </div>
    </>
  );
};

export default FadeIn;
