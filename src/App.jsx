import { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./mainComponents/Nav";
import NavBottomLink from "./mainComponents/subComponents/NavBottomLink";
import Header from "./mainComponents/Header";

function App() {
  const bottomNavRef = useRef();
  const openBottomNavRef = useRef();
  const navBottomLinkContainerRef = useRef([]);
  let prevActive = useRef(0);
  const [bottomNavComponents, setBottomNavComponents] = useState([]);

  const toggleBottomNav = () => {
    bottomNavRef.current.classList.toggle("close");
    setTimeout(() => {
      openBottomNavRef.current.classList.toggle("open");
    }, 500);
  };

  const toggleActive = (j) => {
    if (j !== prevActive.current) {
      navBottomLinkContainerRef.current[j].classList.toggle("active");
      navBottomLinkContainerRef.current[prevActive.current].classList.toggle("active");
      prevActive.current = j;
    }
  };

  useEffect(() => {
    const el = navBottomLinkContainerRef.current[prevActive.current]
    if (el) navBottomLinkContainerRef.current[prevActive.current].classList.toggle("active");
  }, [bottomNavComponents]);

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
      <Header />
    </>
  );
}

export default App;
