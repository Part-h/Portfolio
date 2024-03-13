import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (    /* data?.skills: The optional chaining (?.) is used to access properties deeply nested within the object. It ensures that if either data or data.skills is null or undefined, the code won't throw an error, and it will gracefully handle the absence of the property. */
          <div key={index} className="skills--section--card">
            <div className="frontside">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
            <div class="content">
                    <div class="center">
                        <span>Web Designer</span> 
                    </div>                
                 </div>
            </div>
          </div>
        ))}
      </div>
    
    </section>
  );
}
