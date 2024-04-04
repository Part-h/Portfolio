export default function HeroSection(){
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          // Scroll smoothly to the specified section
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    Hey<span class="waving-hand">👋</span><br/>
                    <span className="hero--section--title"> I'm <span className="hero--section--name">Parth Patel</span>.</span>
                    <br></br>Full Stack Developer
                    
                </div>
                {/* <button className="btn btn-outline-primary" onClick={() => scrollToSection('mySkills')}>View My Work</button> */}

            </div>
        </section>
    )
}