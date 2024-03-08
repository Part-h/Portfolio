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
                    <p className="hero--section--title">Hey, I'm <span className="hero--section--name">Parth Patel</span>.</p>
                    <h1 className="hero--section--title">
                        {/* <span className="hero--section--title--color">Full Stack</span>{" "} */}
                    </h1>
                    <h1 className="hero--section--title">I'm a Full Stack Developer.</h1>
                    {/* <p className="hero--section-description">
                            
                        <br/> asdnmakkmdkam, asdokasodkmsdakmsa'.asdmalmdapmd
                    </p> */}
                </div>
                <button className="btn btn-outline-primary" onClick={() => scrollToSection('mySkills')}>View My Work</button>

            </div>
        </section>
    )
}