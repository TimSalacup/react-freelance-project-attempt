import { useEffect, useRef, useState } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import PhotoViewer from "./pages/PhotoViewer";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBottomLink from "./mainComponents/subComponents/NavBottomLink";

function App() {
  const location = useLocation();
  const bottomNavRef = useRef();
  const openBottomNavRef = useRef();
  const menuButtonRef = useRef();
  const closeMenuButtonRef = useRef();
  const menuRef = useRef();
  const headerBgRef = useRef();
  const navBottomLinkContainerRef = useRef([]);
  const headerImgRef = useRef([]);
  const aboutUsButtonsRef = useRef([]);
  const photoViewerPreviewsRef = useRef([]);
  let aboutImgIndex = useRef(0);
  let prevActiveNav = useRef(0);
  let prevActiveHeader = useRef(0);
  let prevActiveAbout = useRef(0);
  let currentAbout = useRef([]);
  let startX = useRef(0);
  let endX = useRef(0);
  let diffX = useRef(0);
  const [bottomNavComponents, setBottomNavComponents] = useState([]);
  const [headerImagesArray, setHeaderImagesArray] = useState([]);
  const [aboutUsSections, setAboutUsSections] = useState([]);
  const [photoViewerPreviews, setPhotoViewerPreviews] = useState([]);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutPara, setAboutPara] = useState("");
  const [aboutImg, setAboutImg] = useState("");
  const [aboutSection, setAboutSection] = useState("T");
  const [photoViewerImg, setPhotoViewerImg] = useState("T");

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
      img: AboutUsImgs.AboutTrainedImgs[0],
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
      setPhotoViewerImg(currentAbout[aboutImgIndex.current]);
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
            onClick={() => changePhotoViewerIndex(i)}
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
        photoViewerPreviewsRef.current[aboutImgIndex.current].classList.toggle(
          "selected"
        );
      else {
        photoViewerPreviewsRef.current[0].classList.toggle("selected");
      }
    }, 100);
  };

  // PHOTOVIEWER - CHANGES SELECTED PREVIEW
  const changePhotoViewerIndex = (index) => {
    if (index !== aboutImgIndex.current) {
      photoViewerPreviewsRef.current[aboutImgIndex.current].classList.toggle(
        "selected"
      );
      aboutImgIndex.current = index;
      photoViewerPreviewsRef.current[aboutImgIndex.current].classList.toggle(
        "selected"
      );
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
      setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
    }
  };

  // MAKES SURE THE PAGE REFRESHES AT THE TOP
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

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
    if (prevActiveHeader.current + 1 <= HeaderImages.length - 1) {
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
      prevActiveHeader.current = HeaderImages.length - 1;
      headerImgRef.current[prevActiveHeader.current].classList.toggle(
        "visible"
      );
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
      setAboutImg(AboutUsContentArray[aboutImgIndex.current].img);
      setIsHorizontal(AboutUsContentArray[prevActiveAbout.current].horizontal);
      setTimeout(() => {
        aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
          "active"
        );
      }, 1);
    }
  }, [aboutUsButtonsRef]);

  // RUNS WHEN THE PAGE FIRST LOADS:
  // 1) LOADS THE IMAGES ON THE HEADER
  // 2) MAPS THE ABOUT US BUTTONS
  // 3) MAPS BOTTOM NAV BUTTONS
  // 4) ADDS EVENT LISTENER TO HEADER BG REF
  useEffect(() => {
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

  // RUNS WHEN YOU COME OUT FROM PHOTOVIEWER HERE
  const onPhotoViewerClose = () => {
    setTimeout(() => {
      headerImgRef.current[0].classList.toggle("visible");
      aboutUsButtonsRef.current[prevActiveAbout.current].classList.toggle(
        "active"
      );
      navBottomLinkContainerRef.current[prevActiveNav.current].classList.toggle(
        "active"
      );
    }, 50);
  };

  // SETS THE DEFAULT BACKGROUND IMAGE IN THE HEADER
  useEffect(() => {
    if (headerImgRef.current[prevActiveHeader.current]) {
      headerImgRef.current[prevActiveHeader.current].classList.add("visible");
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

  const nextTrainedImg = () => {
    if (aboutImgIndex.current === AboutUsImgs.AboutTrainedImgs.length - 1) {
      aboutImgIndex.current = 0;
      setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
    } else {
      ++aboutImgIndex.current;
      setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
    }
  };

  const previousTrainedImg = () => {
    if (aboutImgIndex.current === 0) {
      aboutImgIndex.current = AboutUsImgs.AboutTrainedImgs.length - 1;
      setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
    } else {
      --aboutImgIndex.current;
      setAboutImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
      setPhotoViewerImg(AboutUsImgs.AboutTrainedImgs[aboutImgIndex.current]);
    }
  };

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
              nextImage={nextImage}
              previousImage={previousImage}
              aboutUsSections={aboutUsSections}
              aboutTitle={aboutTitle}
              aboutPara={aboutPara}
              aboutImg={aboutImg}
              isHorizontal={isHorizontal}
              aboutSection={aboutSection}
              previousTrainedImg={previousTrainedImg}
              nextTrainedImg={nextTrainedImg}
              AboutTrainedImgs={AboutUsImgs.AboutTrainedImgs}
              aboutImgIndex={aboutImgIndex}
              mapPhotoViewerPreviews={mapPhotoViewerPreviews}
              menuButtonRef={menuButtonRef}
              toggleMenu={toggleMenu}
              closeMenuButtonRef={closeMenuButtonRef}
              menuRef={menuRef}
              headerBgRef={headerBgRef}
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
