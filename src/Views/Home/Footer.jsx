import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";


class Footer extends React.Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll behavior
    });
  };

  render() {
    return (
      <footer className="footer--container">
        <div className="footer--link--container">
          <div className="footer--social--icon">
            <ul>
            <li>
                <a
                  href="https://www.linkedin.com/in/patelparth23/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                </a>
              </li>
           
              <li>
                <a
                  href="https://codepen.io/your-work"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCodepen} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Part-h"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Parth-Patel/pfbid02krBfcQdikscbtGsA8nRh91vK83oxuF8eSgxZG1ebvaZi3Qr2frxD1phAjT4p4spZl/?mibextid=LQQJ4d&rdid=aGyH4wGKG2LofrQc"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="xl" />
                </a>
              </li>
            
              <li>
                <a
                  href="https://www.instagram.com/parth_2__3/?utm_source=qr"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </li>
         
              
             
           
           
            </ul>
          </div>
        </div>
        <div className="footer-rocket-image" >
          <img
            src="./img/rocket.png"
            alt="Rocket"
            className="rocket-image"
            onClick={this.scrollToTop}
          />
          <span className="rocket-image-description">Beam me up!</span>
        </div>

        <div className="footer--content--container">
          <p className="footer--content">
            {" "}
            PARTH PATEL ©<b> 2024</b>
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
