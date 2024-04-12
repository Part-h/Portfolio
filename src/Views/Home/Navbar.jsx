import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);    //setNavActive is a function to update the state value
  const [signatureVisible, setSignatureVisible] = useState(true);

  const toggleNav = () => {                 // Call on hamburger clicked
    setNavActive(!navActive);
    setSignatureVisible(!signatureVisible); // Toggle the visibility of signature content
  };

  const closeMenu = () => {
    setNavActive(false);
    setSignatureVisible(true); // Ensure signature content is visible when menu is closed
  };

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  const openMailTo = (e) => {
    e.preventDefault();
    window.location.href = "mailto:patelparth2018@gmail.com";
  };

  return (
    //this conditional expression checks the navActive value, incase true throws visible to classname attribute or viceversa 
    <nav className={`navbar ${navActive ? "active" : ""}`}>   
      <div className={`nav--signature${signatureVisible ? "visible" : "hidden"}`}>
        <span className="font-face">Parth Patel</span>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
      <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="herosection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
        
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
        
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              Passion
            </Link>
          </li>
          
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyExperience"
              className="navbar--content"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={(e) => {
          openMailTo(e);
          closeMenu(); // Close the menu after clicking the link
        }}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;

