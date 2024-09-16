import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Ghana Muslim Mission College Of Education</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ullam
          impedit mollitia eius quae inventore temporibus, minus dolorem
          nesciunt unde quam nisi numquam asperiores aut maiores necessitatibus
          cum, minima rem?
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
