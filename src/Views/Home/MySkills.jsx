import data from "../../data/index.json";
import { motion, useTime } from "framer-motion";
import { useState } from "react";
import React from "react";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="skills-heading">
        <h1>SKILLS</h1>
        <p>
          Elevating Experiences, Empowering Innovation: Bringing Skills to Life
          in Every Pixel.
        </p>
      </div>

      <div className="skills--section--layer2">
        {data?.skills?.map((item, index) => (
          <SkillCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ item }) {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="skills--section--card">
      <div className="frontside">
        <div className="skills--section--img">
          <motion.img
            src={item.src}
            alt="Product Chain"
            animate={{ rotate: rotate ? 360 : 0 }}
            transition={{duration:0.6}}
            onHoverStart={() => {
              setRotate(true);
            }}
            onHoverEnd={() => {
              setRotate(false);
            }}
          />
        </div>
        <div className="skills--section--card--content">
          <h3 className="skills--section--title">{item.title}</h3>
          <p className="skills--section--description">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
