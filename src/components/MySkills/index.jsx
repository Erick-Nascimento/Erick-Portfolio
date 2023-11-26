import { MySkillsStyle } from "./style";
import SkillCard from "./skillCard";
import Testimonial from "../Testimonial";
import data from "../../data/skills.json";
import { useRef, useContext, useEffect, useState } from "react";
import { SkillContext } from "../../contexts/skillContext";
import { TestimonialsContext } from "../../contexts/testimonialsContext";

function MySkills() {
  const skillPageData = data.skills;
  const testimonialsData = data.testimonials;
  const { selectedSkill } = useContext(SkillContext);
  const $skillContainer = useRef();

  const { testimonialIndex, setTestimonialIndex } =
    useContext(TestimonialsContext);

  function findElement() {
    const foundHard = skillPageData.hardSkills.find(
      (e) => e.title == selectedSkill
    );

    const foundSoft = skillPageData.softSkills.find(
      (e) => e.title == selectedSkill
    );

    if (foundHard != undefined) {
      return foundHard.description;
    } else {
      return foundSoft.description;
    }
  }

  useEffect(() => {}, [selectedSkill]);

  return (
    <MySkillsStyle>
      <div className="skills">
        <div className="hardSkills">
          <span className="title">HardSkills</span>
          {skillPageData.hardSkills.map((item, index) => {
            return (
              <SkillCard
                key={index}
                title={item.title}
                background={item.background}
                image={item.image}
              />
            );
          })}
        </div>
        <div className="softSkills">
          <span className="title">SoftSkills</span>
          {skillPageData.softSkills.map((item, index) => {
            return (
              <SkillCard
                key={index}
                title={item.title}
                background={item.background}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="borderContainer">
          <span className="title">{selectedSkill}</span>
          <span className="content" ref={$skillContainer}>
            {findElement(selectedSkill)}
          </span>
        </div>

        <Testimonial
          photo={testimonialsData[testimonialIndex].photo}
          name={testimonialsData[testimonialIndex].name}
          role={testimonialsData[testimonialIndex].role}
          text={testimonialsData[testimonialIndex].text}
        />
      </div>
    </MySkillsStyle>
  );
}

export default MySkills;
