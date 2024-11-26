import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function MyExperience() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <section
      id="MyExperience"
      className="experience--container">
      <motion.div className="experience-heading"
      
      // ref={ref}  
      // initial={{ x: '-100vw', opacity: 0 }}
      // animate={controls}
      // transition={{ duration: 3 }}
      >
        <h1>EXPERIENCE</h1>
        <p>
          I've been doing web development for about 4 years now, and I'm always eager to learn more in this fast-paced industry.
        </p>
      </motion.div>
      <div className="experience--section">
        <div className="technology-section">
          <h2>SOME TECHNOLOGIES I'VE WORKED WITH:</h2>
          <div className="technology-images">
          <div className="experience--individual--image"><img src="./icons/html.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/css.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/js.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/mongo.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/nodejs.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/python.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/bootstrap.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/java.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/docker.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/jquery.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/firebase.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/mysql.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/github.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/react.png"></img></div>
        <div className="experience--individual--image"><img src="./icons/php.png"></img></div>


          </div>
        </div>

        <div className="experience--section--box">
          <div className="education-section">
            <h2>WHERE I'VE STUDIED:</h2>
            <div className="education-image">
            <img src="./img/uog2.png"></img>
        {/* <img className="education-image-gtu" src="./img/gtu.png"></img> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
