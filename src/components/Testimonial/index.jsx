import { TestimonialCard } from "./style";
import LeftArrow from "/assets/left-arrow.png";
import RightArrow from "/assets/right-arrow.png";
import { useContext } from "react";
import { TestimonialsContext } from "../../contexts/testimonialsContext";
import data from "../../data/skills.json";

function Testimonial({ photo, name, role, text }) {
  const testimonialData = data.testimonials;

  const { testimonialIndex, setTestimonialIndex } =
    useContext(TestimonialsContext);

  const nextTestimonial = () => {
    if (testimonialIndex < testimonialData.length - 1) {
      setTestimonialIndex(testimonialIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (testimonialIndex > 0) {
      setTestimonialIndex(testimonialIndex - 1);
    }
  };

  return (
    <TestimonialCard>
      <img
        src={LeftArrow}
        className="arrowControllers"
        onClick={() => prevTestimonial()}
      />

      <div className="card">
        <div className="left">
          <img src={photo} />
        </div>
        <div className="right2">
          <div className="top">
            <span className="title">{name}</span>
            <span className="role">{role}</span>
          </div>
          <div className="bottom">
            <span>{text}</span>
          </div>
        </div>
      </div>

      <img
        src={RightArrow}
        className="arrowControllers"
        onClick={() => nextTestimonial()}
      />
    </TestimonialCard>
  );
}

export default Testimonial;
