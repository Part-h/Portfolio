import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  //useState is a hook to manage the state of variable 'NavActive'.
  //The useState hook returns an array with two elements: the current state value (NavActive) and a function to update that value (setNavActive).
  const [NavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!NavActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(()=>{
    if(window.innerWidth <=1200){
        closeMenu;
    } 
  },[]);
  return(
    <nav className={`navbar ${NavActive ? "active": ""}`}>
        <div>
            <img src="./img/logo.svg" alt="Logoipsum"/>
        </div>
        <a className={`nav__hamburger ${NavActive ? "active": ""}`} onClick={toggleNav}>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
        </a>
        <div className={`navbar--items ${NavActive ? "active" : ""}`}></div>
    </nav>
  );
}

export default Navbar;