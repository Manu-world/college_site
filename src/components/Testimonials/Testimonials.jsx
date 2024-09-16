import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Testimonial from "./Testimonial";
import { useRef } from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      avatar: user_1,
      name: "John Doe",
      place: "New York",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi quae provident eligendi sed architecto odio unde ea exercitationem consectetur perspiciatis qui culpa non, suscipit quo tenetur! Nulla, aliquam eaque?",
    },
    {
      avatar: user_2,
      name: "Jane Smith",
      place: "California",
      comment: "A wonderful experience from start to finish.",
    },
    {
      avatar: user_3,
      name: "Sam Wilson",
      place: "Texas",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi quae provident eligendi sed architecto odio unde ea exercitationem consectetur perspiciatis qui culpa non, suscipit quo tenetur! Nulla, aliquam eaque?",
    },
    {
      avatar: user_4,
      name: "Lisa Brown",
      place: "Florida",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi quae provident eligendi sed architecto odio unde ea exercitationem consectetur perspiciatis qui culpa non, suscipit quo tenetur! Nulla, aliquam eaque?",
    },
  ];

  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {testimonialsData.map((item, index) => (
            <Testimonial key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
