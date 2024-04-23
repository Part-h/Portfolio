import React, { useState, useEffect } from 'react';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutme.jpg" alt="About me" className="img-hover-effect" />
      </div>
      <div className="hero--section--content--boxabout--section--box">
        <div className="about--section--content">
          <h1 className="about--section--heading">About Me</h1>
          <p className="hero--section-description">
            Embark on an exciting digital journey with me, worked as a Full
            Stack Developer with over 4 years of experience. With a Master's
            degree from renowned and exposure to different cultures, I bring adaptability
            and a global perspective to my work. I excel at blending front-end
            design with back-end functionality, bringing digital projects to
            life with every line of code. 
          </p>
          <p className="hero--section-description">
            Trusted for my commitment to
            excellence and integrity, I deliver innovative solutions that
            resonate with clients and colleagues alike. Join me in shaping the
            future of technology, one step at a time.
          </p>
  
          <div className="banner-search-select">
            <a href='https://www.linkedin.com/in/patelparth23/' target="_blank">
            <button type="submit"> Discover My World </button>
              </a>
              
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;