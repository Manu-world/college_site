import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="about-image" className="about-img" />
        <img src={play_icon} alt="play-icon" className="play-icon" />
      </div>
      <div className="about-right">
        <h2>ABOUT THE COLLEGE</h2>
        <h3>VISION</h3>
        <p>To be a world class institution that provides holistic education.</p>
        <h3>MISSION</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
          ab, nobis accusamus temporibus nemo.
        </p>
        <h3>CORE VALUES</h3>
        <ul>
          <li>
            <strong>Integrity:</strong> We uphold the highest standards of
            honesty and strong moral principles.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest quality in
            all our endeavors and continuously seek improvement.
          </li>
          <li>
            <strong>Inclusivity:</strong> We embrace diversity and foster a
            welcoming environment for all.
          </li>
          <li>
            <strong>Innovation:</strong> We encourage creativity and
            forward-thinking to drive progress and positive change.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
