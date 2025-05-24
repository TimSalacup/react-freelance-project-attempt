import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./mainComponents/Nav";

function App() {
  const [navBottomClassList, setNavBottomClassList] = useState(null);
  // const [active, setActive] = useState("");

  const toggleBottomNav = () => {
    setNavBottomClassList((navBottomClassList += " close"));
    setTimeout(() => {
      document.querySelector(".showNavBottom").classList.toggle("open");
    }, 500);
  };

  // const navToggleActive = () => {

  // }

  useEffect(() => {
    setNavBottomClassList(document.querySelector(".nav__bottom"));
    console.log(navBottomClassList);
  }, []);

  return (
    <>
      <Nav toggleBottomNav={toggleBottomNav} />
    </>
  );
}

export default App;
