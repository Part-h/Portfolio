export default function HeroSection(){
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Parth</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{" "}
                    <br/>
                    Developer
                    </h1>
                    <p className="hero--section-description">
                            Lorem asdnasjkdnasnd askkdaksmdkasndas akmdkasda.
                        <br/> asdnmakkmdkam, asdokasodkmsdakmsa'.asdmalmdapmd
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"></img>
            </div>
        </section>
    )
}