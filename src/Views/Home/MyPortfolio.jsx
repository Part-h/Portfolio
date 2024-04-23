import { color } from "framer-motion";
import data from "../../data/index.json";

export default function MyPortfolio(){
    return(
    <section id="MyPortfolio" className="portfolio--section">
     
     <div className="portfolio--container-box">        
          <h1 className="section--heading">My Portfolio</h1>
          <p className="sub--title">( Recent Projects )</p>
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <a className="portfolio--section--card--anchor" href={item.href} target="blank" >
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h2 className="portfolio--section--title">{item.title}</h2>
              </div>
              <div>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
            </a>
          </div>
        ))}
      </div>
      
    </section>
    )
}