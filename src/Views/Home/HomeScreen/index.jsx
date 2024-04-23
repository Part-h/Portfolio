import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import MyExperience from "../Experience";
import MyResume from "../MyResume";
import Footer from "../Footer";
import { Helmet } from 'react-helmet-async';


export default function Home(){
    return(
        <>  
            <Helmet>
<title>Parth Patel | Full Stack Developer | 4 Years Expertise</title>
<meta name='description' content='Parth Patel portfolio website based on ReactJs' />
<link rel="icon" type="image/png" href="coding (1).ico" sizes="16x16" />
</Helmet>
            <HeroSection/>
            <AboutMe/>
            <MySkills/>
            <MyExperience/>
            <MyResume/>
            <MyPortfolio/>
            <Footer/>
        </>
    )
}
