import "../App.css";
import Nav from "../mainComponents/Nav";
import Header from "../mainComponents/Header";
import OurServices from "../mainComponents/OurServices";
import FadeIn from "../mainComponents/subComponents/FadeIn";
import AboutUs from "../mainComponents/AboutUs";
import Quotes from "../mainComponents/Quotes";
import Footer from "../mainComponents/Footer";
import AboutUsPhone from "../mainComponents/AboutUsPhone";

const Layout = ({
  toggleBottomNav,
  toggleActive,
  bottomNavRef,
  openBottomNavRef,
  navBottomLinkContainerRef,
  bottomNavComponents,
  headerImagesArray,
  nextImage,
  previousImage,
  aboutUsSections,
  aboutTitle,
  aboutPara,
  aboutImg,
  isHorizontal,
  aboutSection,
  nextTrainedImg,
  previousTrainedImg,
  mapPhotoViewerPreviews,
  menuButtonRef,
  toggleMenu,
  closeMenuButtonRef,
  menuRef,
  headerBgRef,
  aboutUsPhoneContentContainer,
}) => {
  return (
    <>
      <Nav
        toggleBottomNav={toggleBottomNav}
        toggleActive={toggleActive}
        bottomNavRef={bottomNavRef}
        openBottomNavRef={openBottomNavRef}
        navBottomLinkContainerRef={navBottomLinkContainerRef}
        bottomNavComponents={bottomNavComponents}
        menuButtonRef={menuButtonRef}
        toggleMenu={toggleMenu}
        closeMenuButtonRef={closeMenuButtonRef}
        menuRef={menuRef}
      />
      <main className="moveDown">
        <Header
          headerImagesArray={headerImagesArray}
          nextImage={nextImage}
          previousImage={previousImage}
          headerBgRef={headerBgRef}
        />
        <AboutUs
          aboutUsSections={aboutUsSections}
          aboutTitle={aboutTitle}
          aboutPara={aboutPara}
          aboutImg={aboutImg}
          isHorizontal={isHorizontal}
          aboutSection={aboutSection}
          nextTrainedImg={nextTrainedImg}
          previousTrainedImg={previousTrainedImg}
          mapPhotoViewerPreviews={mapPhotoViewerPreviews}
        />
        <AboutUsPhone
          aboutTitle={aboutTitle}
          aboutPara={aboutPara}
          aboutImg={aboutImg}
          isHorizontal={isHorizontal}
          nextTrainedImg={nextTrainedImg}
          previousTrainedImg={previousTrainedImg}
          mapPhotoViewerPreviews={mapPhotoViewerPreviews}
          aboutUsPhoneContentContainer={aboutUsPhoneContentContainer}
        />
        <FadeIn>
          <OurServices />
        </FadeIn>
        <Quotes />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
