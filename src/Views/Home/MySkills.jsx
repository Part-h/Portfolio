import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact} from "@fortawesome/free-brands-svg-icons";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="experience-heading">
            <h1> SKILLS</h1>
            <p> Elevating Experiences, Empowering Innovation: Bringing Skills to Life in Every Pixel.</p>
        </div>

      {/* <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div class="skills--section--layer2">
        {data?.skills?.map((item, index) => (
          <div key={index} class="skills--section--card">
            <div class="frontside">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="content">
              <div className="backside">
              <FontAwesomeIcon className="myskills--react" icon={faReact} size="lg" style={{color:"#74C0FC",}}/>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
