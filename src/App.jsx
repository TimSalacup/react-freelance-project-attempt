import { useEffect, useRef, useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import PhotoViewer from "./pages/PhotoViewer";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBottomLink from "./mainComponents/subComponents/NavBottomLink";
import AboutUsPhoneContent from "./mainComponents/subComponents/AboutUsPhoneContent";

function App() {
  const location = useLocation();
  const bottomNavRef = useRef();
  const openBottomNavRef = useRef();
  const menuButtonRef = useRef();
  const closeMenuButtonRef = useRef();
  const menuRef = useRef();
  const headerBgRef = useRef();
  const scrollGifIconsRef = useRef();
  const navBottomLinkContainerRef = useRef([]);
  const headerImgRef = useRef([]);
  const aboutUsButtonsRef = useRef([]);
  const photoViewerPreviewsRef = useRef([]);
  const aboutUsContentImgRef = useRef([]);
  let currentAbout = useRef([]);
  let prevActiveNav = useRef(0);
  let startX = useRef(0);
  let endX = useRef(0);
  let diffX = useRef(0);
  let prevActiveAbout = useRef(0);
  let aboutImgIndex = useRef(0);
  const [prevActiveHeader, setPrevActiveHeader] = useState(0);
  const [bottomNavComponents, setBottomNavComponents] = useState([]);
  const [headerImagesArray, setHeaderImagesArray] = useState([]);
  const [aboutUsSections, setAboutUsSections] = useState([]);
  const [photoViewerPreviews, setPhotoViewerPreviews] = useState([]);
  const [aboutUsPhoneContentContainer, setAboutUsPhoneContentContainer] =
    useState([]);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [aboutUsContentImgRefReady, setAboutUsContentImgRefReady] =
    useState(false);
  const [
    aboutUsContentPhoneTrainedImgReady,
    setAboutUsContentPhoneTrainedImgReady,
  ] = useState(false);
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutPara, setAboutPara] = useState("");
  const [aboutImg, setAboutImg] = useState("");
  const [aboutPhoneImg, setAboutPhoneImg] = useState("");
  const [aboutSection, setAboutSection] = useState("T");
  const [photoViewerImg, setPhotoViewerImg] = useState("T");
  const [photoViewerLoaded, setPhotoViewerLoaded] = useState(false);

  const AboutUsImgs = {
    AboutTrainedImgs: [
      "/photoViewerPhotos/trained/training0.jpg",
      "/photoViewerPhotos/trained/training1.jpg",
      "/photoViewerPhotos/trained/training2.jpg",
      "/photoViewerPhotos/trained/training3.jpg",
      "/photoViewerPhotos/trained/training4.jpg",
      "/photoViewerPhotos/trained/training5.jpg",
      "/photoViewerPhotos/trained/training6.jpg",
      "/photoViewerPhotos/trained/training7.jpg",
      "/photoViewerPhotos/trained/training8.jpg",
    ],
    AboutAccredImgs: ["/publicAssets/cvsAccred.png"],
    AboutDcpiImgs: ["/publicAssets/certificate.jpg"],
  };

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
      section: AboutUsSectionsArray[0][0],
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
          <br />~ Mr. Tomas Julius G. Salacup, CVS Board Member
        </>
      ),
      img: AboutUsImgs.AboutTrainedImgs[aboutImgIndex],
      horizontal: false,
    },
    {
      section: AboutUsSectionsArray[1][0],
      title: "PHILHEALTH ACCREDITED",
      paragraph:
        "CVS Dialysis Center is officially included in PhilHealth's updated list of accredited freestanding dialysis clinics for 2025—reflecting our continued commitment to quality kidney care.",
      img: AboutUsImgs.AboutAccredImgs[0],
      horizontal: true,
    },
    {
      section: AboutUsSectionsArray[2][0],
      title: "TOGETHER WITH DCPI",
      paragraph:
        "CVS Dialysis Center and DCPI (Dialysis Coalition of the Philippines, Inc.) are in partnership together in making A+ Kidney Healthcare Management.",
      img: AboutUsImgs.AboutDcpiImgs[0],
      horizontal: true,
    },
  ];

  // MAKES SURE THE PAGE REFRESHES AT THE TOP
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  // RUNS IF NOT YET IMPLEMENTED
  const notImplemented = () => {
    alert("Not yet implemented");
  };

  // TOGGLES THE VISIBILITY OF THE MENU BUTTONS & MENU
  const toggleMenu = () => {
    if (!menuOpened) {
      menuButtonRef.current.classList.toggle("invisible");
      menuRef.current.classList.toggle("menu__open");
      setTimeout(() => {
        closeMenuButtonRef.current.classList.toggle("invisible");
        setMenuOpened(true);
      }, 310);
    } else {
      closeMenuButtonRef.current.classList.toggle("invisible");
      menuRef.current.classList.toggle("menu__open");
      setTimeout(() => {
        setMenuOpened(false);
        menuButtonRef.current.classList.toggle("invisible");
      }, 310);
    }
  };

  // SCROLLS TO ABOUT AFTER COMING OUT FROM PHOTOVIEWER
  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        document
          .querySelector(location.hash)
          .scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      }
    }, 100);
  }, [location]);

  // MAPS PHOTO VIEWER PREVIEWS
  const mapPhotoViewerPreviews = () => {
    if (aboutSection === "T") {
      currentAbout = AboutUsImgs.AboutTrainedImgs;
      setPhotoViewerImg(currentAbout[aboutImgIndex]);
    } else if (aboutSection === "A") {
      currentAbout = AboutUsImgs.AboutAccredImgs;
      setPhotoViewerImg(currentAbout[0]);
    } else if (aboutSection === "W") {
      currentAbout = AboutUsImgs.AboutDcpiImgs;
      setPhotoViewerImg(currentAbout[0]);
    }
    setPhotoViewerPreviews(
      currentAbout.map((img, i) => {
        return (
          <div
            className="photoViewer__preview"
            key={i}
            ref={(el) => {
              if (el) photoViewerPreviewsRef.current[i] = el;
            }}
          >
            <img
              src={`${img}`}
              alt={`image ${i}`}
              className="photoViewer__preview--img"
            />
          </div>
        );
      })
    );
    setTimeout(() => {
      if (aboutSection === "T")
        photoViewerPreviewsRef.current[aboutImgIndex].classList.toggle(
          "selected"
        );
      else {
        photoViewerPreviewsRef.current[0].classList.toggle("selected");
      }
    }, 100);
  };

  let photoViewerIndex = useRef(0);

  // UPDATES PHOTOVIEWER INDEX WHEN NEEDED
  useEffect(() => {
    if (aboutImgIndex) photoViewerIndex.current = aboutImgIndex;
    if (photoViewerLoaded) {
      const photoViewerImg = new Image();
      photoViewerImg.src = aboutImg;
      photoViewerImg.onload = () => {
        photoViewerImg.width > photoViewerImg.height
          ? document.querySelector("img").classList.add("horizontal")
          : document.querySelector("img").classList.remove("horizontal");
      };
    }
  }, [aboutImgIndex, aboutImg, photoViewerLoaded]);

  const nextPhotoViewerImage = () => {
    if (aboutSection === "T") {
      const photoViewerNextIndex =
        photoViewerIndex.current + 1 < AboutUsImgs.AboutTrainedImgs.length
          ? photoViewerIndex.current + 1
          : 0;
      photoViewerPreviewsRef.current[photoViewerNextIndex].classList.toggle(
        "selected"
      );
      photoViewerPreviewsRef.current[photoViewerIndex.current].classList.toggle(
        "selected"
      );
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[photoViewerNextIndex]);
      setAboutPhoneImg(AboutUsImgs.AboutTrainedImgs[photoViewerNextIndex]);
      setAboutImg(AboutUsImgs.AboutTrainedImgs[photoViewerNextIndex]);
      aboutImgIndex.current = photoViewerNextIndex;
      photoViewerIndex.current = photoViewerNextIndex;
    }
  };

  const previousPhotoViewerImage = () => {
    if (aboutSection === "T") {
      const photoViewerPreviousIndex =
        photoViewerIndex.current - 1 < 0
          ? AboutUsImgs.AboutTrainedImgs.length - 1
          : photoViewerIndex.current - 1;
      photoViewerPreviewsRef.current[photoViewerPreviousIndex].classList.toggle(
        "selected"
      );
      photoViewerPreviewsRef.current[photoViewerIndex.current].classList.toggle(
        "selected"
      );
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[photoViewerPreviousIndex]);
      setAboutPhoneImg(AboutUsImgs.AboutTrainedImgs[photoViewerPreviousIndex]);
      setAboutImg(AboutUsImgs.AboutTrainedImgs[photoViewerPreviousIndex]);
      aboutImgIndex.current = photoViewerPreviousIndex;
      photoViewerIndex.current = photoViewerPreviousIndex;
    }
  };

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

  // DETECTS WHEN THE USER PRESSES AND RELEASES (HORIZONTAL SCROLLS) HERE
  const aboutTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const aboutTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    diffX.current = Math.ceil(startX.current - endX.current);
    if (diffX.current > 30) {
      nextTrainedImg();
    } else if (diffX.current < -60) {
      previousTrainedImg();
    }
  };

  // HEADER - HORIZONTAL SCROLL SLIDESHOW
  const headerTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const headerTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX;
    diffX.current = Math.ceil(startX.current - endX.current);
    if (diffX.current > 30) {
      nextImage();
    } else if (diffX.current < -60) {
      previousImage();
    }
  };

  const prevActiveHeaderRef = useRef(0);
  // GOES TO THE NEXT HEADER PHOTO
  const nextImage = () => {
    const nextIndex =
      prevActiveHeaderRef.current + 1 <= HeaderImages.length - 1
        ? prevActiveHeaderRef.current + 1
        : 0;

    headerImgRef.current[prevActiveHeaderRef.current].classList.toggle(
      "visible"
    );

    headerImgRef.current[nextIndex].classList.toggle("visible");

    prevActiveHeaderRef.current = nextIndex;
    setPrevActiveHeader(nextIndex);

    document
      .querySelector(".scrollGif__icons--header")
      .classList.add("invisible");
  };

  // GOES TO THE PREVIOUS HEADER PHOTO
  const previousImage = () => {
    const previousIndex =
      prevActiveHeaderRef.current - 1 < 0
        ? HeaderImages.length - 1
        : prevActiveHeaderRef.current - 1;

    headerImgRef.current[prevActiveHeaderRef.current].classList.toggle(
      "visible"
    );

    headerImgRef.current[previousIndex].classList.toggle("visible");

    prevActiveHeaderRef.current = previousIndex;
    setPrevActiveHeader(previousIndex);

    document
      .querySelector(".scrollGif__icons--header")
      .classList.add("invisible");
  };

  // CHANGES ABOUT IMAGE AND ABOUT CONTENT
  const changeAbout = (i) => {
    if (prevActiveAbout.current !== i) {
      setAboutTitle(AboutUsContentArray[i].title);
      setAboutPara(AboutUsContentArray[i].paragraph);
      setAboutImg(AboutUsContentArray[i].img);
      setIsHorizontal(AboutUsContentArray[i].horizontal);
      setAboutSection(AboutUsContentArray[i].section);
      aboutUsButtonsRef.current[i].classList.toggle("active");
      aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
        "active"
      );
      prevActiveAbout.current = i;
    }
  };

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
      }, 50);
    }
  }, [aboutUsButtonsRef]);

  useEffect(() => {
    setAboutUsPhoneContentContainer(
      AboutUsContentArray.map((el, index) => {
        return (
          <AboutUsPhoneContent
            isHorizontal={el.horizontal}
            paragraph={el.paragraph}
            title={el.title}
            img={el.section === "T" ? aboutPhoneImg : el.img}
            key={index}
            section={el.section}
            aboutUsContentImgRef={(el) => {
              if (el) aboutUsContentImgRef.current[index] = el;
              index === AboutUsContentArray.length - 1 &&
                setAboutUsContentImgRefReady(true);
            }}
            nextTrainedImg={nextTrainedImg}
            previousTrainedImg={previousTrainedImg}
          />
        );
      })
    );
  }, [aboutUsContentPhoneTrainedImgReady, aboutPhoneImg]);

  useEffect(() => {
    if (aboutUsContentImgRefReady) {
      aboutUsContentImgRef.current[0].addEventListener(
        "touchstart",
        aboutTouchStart
      );
      aboutUsContentImgRef.current[0].addEventListener(
        "touchend",
        aboutTouchEnd
      );
    }
  }, [aboutUsContentImgRefReady]);

  // HERE
  // CHANGES THE TRAINED IMAGES ON THE ABOUT US SECTION
  const nextTrainedImg = () => {
    const aboutNextIndex =
      aboutImgIndex.current + 1 > AboutUsImgs.AboutTrainedImgs.length - 1
        ? 0
        : aboutImgIndex.current + 1;
    setAboutPhoneImg(AboutUsImgs.AboutTrainedImgs[aboutNextIndex]);
    setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutNextIndex]);
    setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutNextIndex]);
    aboutImgIndex.current = aboutNextIndex;
    photoViewerIndex.current = aboutNextIndex;
    document
      .querySelector(".scrollGif__icons--about")
      .classList.add("invisible");
  };

  const previousTrainedImg = () => {
    const aboutPreviousIndex =
      aboutImgIndex.current - 1 < 0
        ? AboutUsImgs.AboutTrainedImgs.length - 1
        : aboutImgIndex.current - 1;
    setAboutPhoneImg(AboutUsImgs.AboutTrainedImgs[aboutPreviousIndex]);
    setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutPreviousIndex]);
    setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutPreviousIndex]);
    aboutImgIndex.current = aboutPreviousIndex;
    photoViewerIndex.current = aboutPreviousIndex;
    document
      .querySelector(".scrollGif__icons--about")
      .classList.add("invisible");
  };

  // RUNS WHEN THE PAGE FIRST LOADS:
  // 1) LOADS THE IMAGES ON THE HEADER
  // 2) MAPS THE ABOUT US BUTTONS
  // 3) MAPS BOTTOM NAV BUTTONS
  // 4) ADDS EVENT LISTENER TO HEADER BG REF
  // 5) LOADS THE "TRAINED" SECTION IMAGES FOR THE PHONE VERSION
  useEffect(() => {
    setAboutPhoneImg(AboutUsImgs.AboutTrainedImgs[0]);
    setAboutUsContentPhoneTrainedImgReady(true);
    headerBgRef.current.addEventListener("touchstart", headerTouchStart);
    headerBgRef.current.addEventListener("touchend", headerTouchEnd);
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

  // RUNS WHEN YOU COME OUT FROM PHOTOVIEWER
  const onPhotoViewerClose = () => {
    setTimeout(() => {
      headerBgRef.current.addEventListener("touchstart", headerTouchStart);
      headerBgRef.current.addEventListener("touchend", headerTouchEnd);
      headerImgRef.current[0].classList.toggle("visible");
      aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
        "active"
      );
      navBottomLinkContainerRef.current[prevActiveNav.current].classList.toggle(
        "active"
      );
      setPhotoViewerLoaded(false);
    }, 50);
  };

  // SETS THE DEFAULT BACKGROUND IMAGE IN THE HEADER
  useEffect(() => {
    if (headerImgRef.current[prevActiveHeader]) {
      headerImgRef.current[prevActiveHeader].classList.add("visible");
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

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              toggleBottomNav={toggleBottomNav}
              toggleActive={toggleActive}
              bottomNavRef={bottomNavRef}
              openBottomNavRef={openBottomNavRef}
              navBottomLinkContainerRef={navBottomLinkContainerRef}
              bottomNavComponents={bottomNavComponents}
              headerImagesArray={headerImagesArray}
              headerImages={HeaderImages}
              nextImage={nextImage}
              previousImage={previousImage}
              aboutUsSections={aboutUsSections}
              aboutTitle={aboutTitle}
              aboutPara={aboutPara}
              aboutImg={aboutImg}
              aboutSection={aboutSection}
              previousTrainedImg={previousTrainedImg}
              nextTrainedImg={nextTrainedImg}
              aboutTrainedImgs={AboutUsImgs.AboutTrainedImgs}
              aboutImgIndex={aboutImgIndex}
              mapPhotoViewerPreviews={mapPhotoViewerPreviews}
              menuButtonRef={menuButtonRef}
              toggleMenu={toggleMenu}
              closeMenuButtonRef={closeMenuButtonRef}
              menuRef={menuRef}
              headerBgRef={headerBgRef}
              isHorizontal={isHorizontal}
              aboutUsPhoneContentContainer={aboutUsPhoneContentContainer}
              scrollGifIconsRef={scrollGifIconsRef}
              indexHeader={prevActiveHeader}
              notImplemented={notImplemented}
            />
          }
        />
        <Route
          path="/photoViewer"
          element={
            <PhotoViewer
              onPhotoViewerClose={onPhotoViewerClose}
              photoViewerPreviews={photoViewerPreviews}
              photoViewerImg={photoViewerImg}
              previousPhotoViewerImage={previousPhotoViewerImage}
              nextPhotoViewerImage={nextPhotoViewerImage}
              setPhotoViewerLoaded={setPhotoViewerLoaded}
              aboutSection={aboutSection}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
