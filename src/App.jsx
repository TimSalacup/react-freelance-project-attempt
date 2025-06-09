import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./mainComponents/Nav";
import NavBottomLink from "./mainComponents/subComponents/NavBottomLink";
import Header from "./mainComponents/Header";
import OurServices from "./mainComponents/OurServices";
import FadeIn from "./mainComponents/subComponents/FadeIn";
import AboutUs from "./mainComponents/AboutUs";
import Quotes from "./mainComponents/Quotes";
import Footer from "./mainComponents/Footer";


function App() {
  const bottomNavRef = useRef();
  const openBottomNavRef = useRef();
  const navBottomLinkContainerRef = useRef([]);
  const headerImgRef = useRef([]);
  const aboutUsButtonsRef = useRef([]);
  let prevActiveNav = useRef(0);
  let prevActiveHeader = useRef(0);
  let prevActiveAbout = useRef(0);
  const [bottomNavComponents, setBottomNavComponents] = useState([]);
  const [headerImagesArray, setHeaderImagesArray] = useState([]);
  const [aboutUsSections, setAboutUsSections] = useState([]);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutPara, setAboutPara] = useState("");
  const [aboutImg, setAboutImg] = useState("");

  // OPENS AND CLOSES THE BOTTOM PART OF THE NAV
  const toggleBottomNav = () => {
    bottomNavRef.current.classList.toggle("close");
    setTimeout(() => {
      openBottomNavRef.current.classList.toggle("open");
    }, 500);
  };

  // SETS THE "ACTIVE"/HIGHLIGHTED LINK OF THE BOTTOM PART OF THE NAV
  const toggleActive = (j) => {
    if (j !== prevActiveNav.current) {
      navBottomLinkContainerRef.current[j].classList.toggle("active");
      navBottomLinkContainerRef.current[prevActiveNav.current].classList.toggle(
        "active"
      );
      prevActiveNav.current = j;
    }
  };

  // SETS THE DEFAULT HIGHLIGHTED LINK OF THE BOTTOM PART OF THE NAV
  useEffect(() => {
    const el = navBottomLinkContainerRef.current[prevActiveNav.current];
    if (el)
      navBottomLinkContainerRef.current[prevActiveNav.current].classList.toggle(
        "active"
      );
  }, [bottomNavComponents]);

  // GOES TO THE NEXT HEADER PHOTO
  const nextImage = () => {
    if (prevActiveHeader.current + 1 <= headerImagesArray.length - 1) {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
      headerImgRef.current[prevActiveHeader.current + 1].classList.toggle(
        "visible"
      );
      ++prevActiveHeader.current;
    } else {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
      prevActiveHeader.current = 0;
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
    }
  };

  // GOES TO THE PREVIOUS HEADER PHOTO
  const previousImage = () => {
    if (prevActiveHeader.current - 1 >= 0) {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
      headerImgRef.current[prevActiveHeader.current - 1].classList.toggle(
        "visible"
      );
      --prevActiveHeader.current;
    } else {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
      prevActiveHeader.current = headerImagesArray.length - 1;
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
    }
  };

  // CHANGES ABOUT IMAGE
  const changeAbout = (i) => {
    if (prevActiveAbout.current !== i) {
      setAboutTitle(AboutUsContentArray[i].title);
      setAboutPara(AboutUsContentArray[i].paragraph);
      setAboutImg(AboutUsContentArray[i].img);
      setIsHorizontal(AboutUsContentArray[i].horizontal);
      aboutUsButtonsRef.current[i].classList.toggle("active");
      aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
        "active"
      );
      prevActiveAbout.current = i;
    }
  };
  // HERE

  // SETS DEFAULT ABOUT US IMAGE & ACTIVE BUTTON
  useEffect(() => {
    if (aboutUsButtonsRef) {
      setAboutTitle(AboutUsContentArray[prevActiveAbout.current].title);
      setAboutPara(AboutUsContentArray[prevActiveAbout.current].paragraph);
      setAboutImg(AboutUsContentArray[prevActiveAbout.current].img);
      setIsHorizontal(AboutUsContentArray[prevActiveAbout.current].horizontal);
      setTimeout(() => {
        aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
          "active"
        );
      }, 1);
    }
  }, [aboutUsButtonsRef]);

  // LOADS THE IMAGES ON THE HEADER & MAPS THE ABOUT US BUTTONS & MAPS BOTTOM NAV BUTTONS
  useEffect(() => {
    let tempHeaderImages = HeaderImages.map((link, i) => {
      return (
        <img
          src={link}
          key={i}
          alt=""
          className="header__bg--img"
          ref={(el) => {
            if (el) headerImgRef.current[i] = el;
          }}
        />
      );
    });
    setHeaderImagesArray(tempHeaderImages);
    setAboutUsSections(
      AboutUsSectionsArray.map((name, i) => {
        return (
          <div
            key={i}
            className="aboutUs__button"
            ref={(el) => {
              if (el) aboutUsButtonsRef.current[i] = el;
            }}
            onClick={() => changeAbout(i)}
          >
            <span className="aboutUs__button--text">{name}</span>
          </div>
        );
      })
    );

    setBottomNavComponents(
      NavLinksDetails.map((link, i) => (
        <NavBottomLink
          key={i}
          text={link.text}
          toggleActive={() => toggleActive(i)}
          navBottomLinkContainerRef={(el) => {
            if (el) navBottomLinkContainerRef.current[i] = el;
          }}
          link={link.address}
        />
      ))
    );
  }, []);

  // SETS THE DEFAULT BACKGROUND IMAGE IN THE HEADER
  useEffect(() => {
    if (headerImgRef.current[prevActiveHeader.current]) {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
    }
  }, [headerImagesArray]);

  const NavLinksDetails = [
    {
      text: "Welcome",
      toggleActive,
      navBottomLinkContainerRef,
      address: "header",
    },
    {
      text: "About Us",
      toggleActive,
      navBottomLinkContainerRef,
      address: "aboutUs",
    },
    {
      text: "Our Services",
      toggleActive,
      navBottomLinkContainerRef,
      address: "services",
    },
    {
      text: "Links",
      toggleActive,
      navBottomLinkContainerRef,
      address: "footer",
    },
  ];

  const HeaderImages = [
    "/publicAssets/asset1.jpg",
    "/publicAssets/asset2.jpg",
    "/publicAssets/asset3.jpg",
    "/publicAssets/asset5.jpg",
    "/publicAssets/asset9.jpg",
    "/publicAssets/asset10.jpg",
    "/publicAssets/asset11.jpg",
  ];

  const AboutUsSectionsArray = ["TRAINED", "ACCREDITED", "WITH DCPI"];

  const AboutUsContentArray = [
    {
      title: "TRAINED NURSES AND STAFF",
      paragraph: (
        <>
          We provide Basic Life Support Advance Training for our Nurses and
          Staff, sponsored by CVS Medical Group, Inc.
          <br />
          <br />
          <i>
            “We train our people so in the event of unexpected emergency, not
            only in our facility, but even in our private homes, or wherever a
            call is needed for us to help our community, we are ready”.
          </i>
          <br />
          <br />- Mr. Tomas Julius G. Salacup, CVS Board Member
        </>
      ),
      img: "/publicAssets/asset7.jpg",
      horizontal: false,
    },
    {
      title: "PHILHEALTH ACCREDITED",
      paragraph:
        "CVS Dialysis Center is officially included in PhilHealth's updated list of accredited freestanding dialysis clinics for 2025—reflecting our continued commitment to quality kidney care.",
      img: "/publicAssets/cvsAccred.png",
      horizontal: true,
    },
    {
      title: "TOGETHER WITH DCPI",
      paragraph:
        "CVS Dialysis Center and DCPI (Dialysis Coalition of the Philippines, Inc.) are in partnership together in making A+ Kidney Healthcare Management.",
      img: "/publicAssets/certificate.jpg",
      horizontal: true,
    },
  ];

  return (
    <>
      <Nav
        toggleBottomNav={toggleBottomNav}
        toggleActive={toggleActive}
        bottomNavRef={bottomNavRef}
        openBottomNavRef={openBottomNavRef}
        navBottomLinkContainerRef={navBottomLinkContainerRef}
        bottomNavComponents={bottomNavComponents}
      />
      <main className="moveDown">
        <Header
          headerImagesArray={headerImagesArray}
          nextImage={nextImage}
          previousImage={previousImage}
        />
        <AboutUs
          aboutUsSections={aboutUsSections}
          aboutTitle={aboutTitle}
          aboutPara={aboutPara}
          aboutImg={aboutImg}
          isHorizontal={isHorizontal}
        />
        <FadeIn>
          <OurServices />
        </FadeIn>
        <Quotes />
      </main>
        <Footer />
    </>
  );
}

export default App;
