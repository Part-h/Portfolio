import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
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
                  href=""
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="navbar--content"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCodepen} size="xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-rocket-image" >
          <img
            src="./img/rocket.png"
            alt="Rocket"
            class="rocket-image"
            onClick={this.scrollToTop}
          />
          <span class="rocket-image-description">Beam me up!</span>
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
