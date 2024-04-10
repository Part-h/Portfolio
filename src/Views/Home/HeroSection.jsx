export default function HeroSection(){
    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    
    //     if (section) {
    //       // Scroll smoothly to the specified section
    //       section.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

    return (
      <section id="herosection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            Hey <span class="waving-hand">👋</span>
            <br />
            <div className="hero--section--whoami">
                <span className="hero--section--title">I'm </span>
                <span className="hero--section--name">Parth Patel</span>
            </div>
            Full Stack Developer
          </div>
        </div>
      </section>
    );
}