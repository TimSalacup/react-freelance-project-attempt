import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./mainComponents/Nav";
import NavBottomLink from "./mainComponents/subComponents/NavBottomLink";
import Header from "./mainComponents/Header";

function App() {
  const bottomNavRef = useRef();
  const openBottomNavRef = useRef();
  const navBottomLinkContainerRef = useRef([]);
  const headerImgRef = useRef([]);
  let prevActiveNav = useRef(0);
  let prevActiveHeader = useRef(0);
  const [bottomNavComponents, setBottomNavComponents] = useState([]);
  const [headerImagesArray, setHeaderImagesArray] = useState([]);

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

  // MAPS THE BOTTOM NAV LINKS WHEN PAGE MOUNTS
  useEffect(() => {
    setBottomNavComponents(
      NavLinksDetails.map((link, i) => (
        <NavBottomLink
          key={i}
          text={link.text}
          toggleActive={() => toggleActive(i)}
          navBottomLinkContainerRef={(el) => {
            if (el) navBottomLinkContainerRef.current[i] = el;
          }}
        />
      ))
    );
  }, []);

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
  }, []);

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

  useEffect(() => {
    if (headerImgRef.current[prevActiveHeader.current]) {
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
    }
  }, [headerImagesArray]);

  // useEffect(() => {
  //   console.log(headerImgRef.current[0].classList)
  // }, [headerImgRef] )

  const NavLinksDetails = [
    {
      text: "About us",
      toggleActive,
      navBottomLinkContainerRef,
    },
    {
      text: "Our Services",
      toggleActive,
      navBottomLinkContainerRef,
    },
    {
      text: "Sample Link",
      toggleActive,
      navBottomLinkContainerRef,
    },
    {
      text: "Sample Link 2",
      toggleActive,
      navBottomLinkContainerRef,
    },
  ];

  const HeaderImages = [
    "/publicAssets/asset1.jpg",
    "/publicAssets/asset3.jpg",
    "/publicAssets/asset5.jpg",
    "/publicAssets/asset2.jpg",
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
      <Header
        headerImagesArray={headerImagesArray}
        nextImage={nextImage}
        previousImage={previousImage}
      />
    </>
  );
}

export default App;
