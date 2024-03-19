import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import MyExperience from "../Experience";
import Footer from "../Footer";

export default function Home(){
    return(
        <>                              {/* fragments */}
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyExperience/>
            <MyPortfolio/>
            <Footer/>
        </>
    )
}
